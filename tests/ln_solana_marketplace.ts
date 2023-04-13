import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { assert } from 'chai';
import fs from 'fs';
import {
  createAcceptOfferTx,
  createAddTreasuryTx,
  createCancelAuctionTx,
  createCancelOfferTx,
  createClaimAuctionTx,
  createCreateAuctionTx,
  createDelistNftTx,
  createDepositTx,
  createInitAuctionDataTx,
  createInitializeTx,
  createInitOfferDataTx,
  createInitSellDataTx,
  createInitUserTx,
  createListForSellNftTx,
  createMakeOfferTx,
  createPlaceBidTx,
  createPurchaseTx,
  createRemoveTreasuryTx,
  createUpdateFeeTx,
  createWithdrawTx,
  getAuctionDataState,
  getGlobalState,
  getNFTPoolState,
  getOfferDataState,
  getUserPoolState,
} from '../lib/scripts';
import {
  ABB_TOKEN_DECIMAL,
  ABB_TOKEN_MINT,
  MARKETPLACE_PROGRAM_ID,
  SELL_DATA_SEED,
  USER_DATA_SEED,
} from '../lib/types';
import {
  airdropSOL,
  createTokenMint,
  getAssociatedTokenAccount,
  getATokenAccountsNeedCreate,
  getEscrowBalance,
  getTokenAccountBalance,
  isExistAccount,
} from '../lib/utils';

import { LnSolanaMarketplace } from '../target/types/ln_solana_marketplace';

// Configure the client to use the local cluster.
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);
const payer = provider.wallet;
console.log('Payer: ', payer.publicKey.toBase58());

const program = anchor.workspace
  .LnSolanaMarketplace as Program<LnSolanaMarketplace>;

let superOwner = null;
let user = null;
let user1 = null;
let reward = null;
let nft = null;

describe('LN_NFT_MARKETPLACE Load Program Object & Prepare testers', () => {
  // assert(
  //   program.programId.toBase58() == MARKETPLACE_PROGRAM_ID.toBase58(),
  //   'Program load Failure!'
  // );

  it('Load Testers', async () => {
    const rawdata = fs.readFileSync(process.env.ANCHOR_WALLET);
    const keyData = JSON.parse(rawdata.toString());

    superOwner = anchor.web3.Keypair.fromSecretKey(new Uint8Array(keyData));
    user = anchor.web3.Keypair.generate();
    user1 = anchor.web3.Keypair.generate();

    console.log('Admin: ', superOwner.publicKey.toBase58());
    console.log('User: ', user.publicKey.toBase58());
    console.log('user1: ', user1.publicKey.toBase58());
  });
  it('Load Reward Token', async () => {
    const rawdata = fs.readFileSync('./tests/keys/reward_mint.json');
    const keyData = JSON.parse(rawdata.toString());
    reward = anchor.web3.Keypair.fromSecretKey(new Uint8Array(keyData));
    assert(
      reward.publicKey.toBase58() == ABB_TOKEN_MINT.toBase58(),
      'Load ABB Token Keypair Failure!'
    );

    await createTokenMint(provider.connection, superOwner, reward);

    assert(
      await isExistAccount(reward.publicKey, provider.connection),
      'Create ABB Token mint failure!'
    );
  });
  it('Airdrop SOL for Testers', async () => {
    await airdropSOL(user.publicKey, 1000 * 1e9, provider.connection);
    let res = await provider.connection.getBalance(user.publicKey);
    assert(res == 1000 * 1e9, 'Airdrop 1000 SOL for user Failed');

    await airdropSOL(user1.publicKey, 1000 * 1e9, provider.connection);
    res = await provider.connection.getBalance(user1.publicKey);
    assert(res == 1000 * 1e9, 'Airdrop 1000 SOL for user1 Failed');
  });
});

describe('Contract Creation', () => {
  it('Contract creator has a role of Admin', async () => {
    const tx = await createInitializeTx(
      superOwner.publicKey,
      program as unknown as anchor.Program
    );
    const txId = await provider.connection.sendTransaction(tx, [superOwner]);
    await provider.connection.confirmTransaction(txId, 'confirmed');
    console.log('TxHash=', txId);

    let globalInfo = await getGlobalState(program as unknown as anchor.Program);
    assert(
      globalInfo.superAdmin.toBase58() == superOwner.publicKey.toBase58(),
      'GlobalInfo Admin Address mismatch with SuperOwner Pubkey'
    );
  });
});
