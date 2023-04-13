export type LnSolanaMarketplace = {
  version: '0.1.0';
  name: 'ln_solana_marketplace';
  instructions: [
    {
      name: 'initialize';
      docs: [
        "* Initialize global PDA\n     *\n     * This will save the payer address as the program's super_admin\n     * Initialize the escrow Vault PDA\n     *\n     * Params: global pda bump, escrow pda bump"
      ];
      accounts: [
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'updateFee';
      docs: [
        '* Update marketplace fee info in the Global PDA as super_admin\n     *\n     * Params:  global pda bump\n     *          sol_fee - marketplace fee as Permyraid for SOL NFT purchasing\n     *          token_fee - marketplace fee as Permyraid for ABB NFT purchasing'
      ];
      accounts: [
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'solFee';
          type: 'u64';
        },
        {
          name: 'tokenFee';
          type: 'u64';
        }
      ];
    },
    {
      name: 'addTeamTreasury';
      docs: [
        '* Add team treasury account\n     *\n     * Params: global pda bump\n     *          treasury address\n     *          distribution rate by permyriad'
      ];
      accounts: [
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'address';
          type: 'publicKey';
        },
        {
          name: 'rate';
          type: 'u64';
        }
      ];
    },
    {
      name: 'removeTeamTreasury';
      docs: [
        '* Remove team treasury account\n     *\n     * Params: global pda bump\n     *          treasury address'
      ];
      accounts: [
        {
          name: 'admin';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'address';
          type: 'publicKey';
        }
      ];
    },
    {
      name: 'initUserPool';
      docs: ['* Initialize User PDA for Escrow & Traded Volume'];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'bump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'initSellData';
      docs: ['* Init NFT listed info - Sell Data PDA'];
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'nft';
          type: 'publicKey';
        },
        {
          name: 'bump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'listNftForSale';
      docs: [
        '* List NFT for sale\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          price_sol is the selling price in sol\n     *          price_token is the selling price in abb'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mintMetadata';
          isMut: true;
          isSigner: false;
          docs: ['the mint metadata'];
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenMetadataProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'sellBump';
          type: 'u8';
        },
        {
          name: 'priceSol';
          type: 'u64';
        },
        {
          name: 'priceToken';
          type: 'u64';
        }
      ];
    },
    {
      name: 'delistNft';
      docs: [
        '* Cancel NFT lising\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'sellBump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'purchase';
      docs: [
        '* Purchase listed NFT in "Buy Now" price\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          seller user pda bump\n     *          buyer user pda bump\n     *          by_token is true when purchasing with abb tokens'
      ];
      accounts: [
        {
          name: 'buyer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'buyerUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'seller';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellerUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellerTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'nftBump';
          type: 'u8';
        },
        {
          name: 'buyerBump';
          type: 'u8';
        },
        {
          name: 'sellerBump';
          type: 'u8';
        },
        {
          name: 'byToken';
          type: 'u8';
        }
      ];
    },
    {
      name: 'depositToEscrow';
      docs: [
        '* Deposit funds to escrow balance\n     *\n     * Params:  user pda bump\n     *          escrow vault bump\n     *          sol is depositing amount\n     *          token is depositing abb amount'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'userBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        },
        {
          name: 'sol';
          type: 'u64';
        },
        {
          name: 'token';
          type: 'u64';
        }
      ];
    },
    {
      name: 'withdrawFromEscrow';
      docs: [
        '* Withdraw funds from escrow balance\n     *\n     * Params:  user pda bump\n     *          escrow vault bump\n     *          sol - withdrawing amount\n     *          token - withdrawing abb amount'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'userBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        },
        {
          name: 'sol';
          type: 'u64';
        },
        {
          name: 'token';
          type: 'u64';
        }
      ];
    },
    {
      name: 'initOfferData';
      docs: [
        '* Init offer data pda\n     *\n     * Params:  nft - NFT address for offering\n     *          offer data pda bump'
      ];
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'offerDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'nft';
          type: 'publicKey';
        },
        {
          name: 'bump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'makeOffer';
      docs: [
        '* Make an offer for a particular NFT\n     *\n     * Params:  nft sell data pda bump\n     *          offer data pda bump\n     *          user pda bump\n     *          escrow vault bump\n     *          price - offer price\n     *          by_token - offering by abb'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'offerDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'userPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'nftBump';
          type: 'u8';
        },
        {
          name: 'offerBump';
          type: 'u8';
        },
        {
          name: 'userBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        },
        {
          name: 'price';
          type: 'u64';
        },
        {
          name: 'byToken';
          type: 'u64';
        }
      ];
    },
    {
      name: 'cancelOffer';
      docs: ['* Cancel offer\n     *\n     * Params: offer data pda bump'];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'offerDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'offerBump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'acceptOffer';
      docs: [
        '* Sell NFT in offer price\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          offer data bump\n     *          buyer user pda bump\n     *          seller user pda bump\n     *          escrow vault bump'
      ];
      accounts: [
        {
          name: 'seller';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'sellDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'buyer';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'offerDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'sellerUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'buyerUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'nftBump';
          type: 'u8';
        },
        {
          name: 'offerBump';
          type: 'u8';
        },
        {
          name: 'buyerBump';
          type: 'u8';
        },
        {
          name: 'sellerBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'initAuctionData';
      docs: [
        '* Init auction data pda\n     *\n     * Params:  nft - NFT address to start auction\n     *          auctiond data pda bump'
      ];
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'auctionDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'nft';
          type: 'publicKey';
        },
        {
          name: 'bump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'createAuction';
      docs: [
        '* Start an auction for NFT\n     *\n     * Params:  global pda bump\n     *          auction pda bump\n     *          start_price - Bidding start price\n     *          min_increase - Minimum inscrease amount of next bidding price\n     *          by_token - auction selling by abb\n     *          end_date - auction end date'
      ];
      accounts: [
        {
          name: 'owner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'auctionDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'auctionBump';
          type: 'u8';
        },
        {
          name: 'startPrice';
          type: 'u64';
        },
        {
          name: 'minIncrease';
          type: 'u64';
        },
        {
          name: 'byToken';
          type: 'u64';
        },
        {
          name: 'endDate';
          type: 'i64';
        }
      ];
    },
    {
      name: 'placeBid';
      docs: [
        '* Place a bid for an auction\n     *\n     * Params:  auction pda bump\n     *          escrow vault pda bump\n     *          price - bidding price'
      ];
      accounts: [
        {
          name: 'bidder';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'auctionDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bidderTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outBidder';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'outBidderTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'auctionBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        },
        {
          name: 'price';
          type: 'u64';
        }
      ];
    },
    {
      name: 'claimAuction';
      docs: [
        '* Claim NFT for won auction\n     *\n     * Params: global pda bump\n     *          escrow vault bump'
      ];
      accounts: [
        {
          name: 'bidder';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'auctionDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'escrowVault';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'escrowTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'bidderUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creator';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creatorTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'creatorUserPool';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'auctionBump';
          type: 'u8';
        },
        {
          name: 'escrowBump';
          type: 'u8';
        }
      ];
    },
    {
      name: 'cancelAuction';
      docs: [
        '* Cancel auction has no bid until end date\n     *\n     * Params: global pda bump\n     *          auctiond data pda bump'
      ];
      accounts: [
        {
          name: 'creator';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'globalAuthority';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'auctionDataInfo';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'userTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'destNftTokenAccount';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'nftMint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: 'globalBump';
          type: 'u8';
        },
        {
          name: 'auctionBump';
          type: 'u8';
        }
      ];
    }
  ];
  accounts: [
    {
      name: 'globalPool';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'superAdmin';
            type: 'publicKey';
          },
          {
            name: 'marketFeeSol';
            type: 'u64';
          },
          {
            name: 'marketFeeToken';
            type: 'u64';
          },
          {
            name: 'teamCount';
            type: 'u64';
          },
          {
            name: 'teamTreasury';
            type: {
              array: ['publicKey', 8];
            };
          },
          {
            name: 'treasuryRate';
            type: {
              array: ['u64', 8];
            };
          }
        ];
      };
    },
    {
      name: 'sellData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            type: 'publicKey';
          },
          {
            name: 'seller';
            type: 'publicKey';
          },
          {
            name: 'collection';
            type: 'publicKey';
          },
          {
            name: 'priceSol';
            type: 'u64';
          },
          {
            name: 'priceToken';
            type: 'u64';
          },
          {
            name: 'listedDate';
            type: 'i64';
          },
          {
            name: 'active';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'offerData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            type: 'publicKey';
          },
          {
            name: 'buyer';
            type: 'publicKey';
          },
          {
            name: 'offerPrice';
            type: 'u64';
          },
          {
            name: 'offerListingDate';
            type: 'i64';
          },
          {
            name: 'byToken';
            type: 'u64';
          },
          {
            name: 'active';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'auctionData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'mint';
            type: 'publicKey';
          },
          {
            name: 'creator';
            type: 'publicKey';
          },
          {
            name: 'startPrice';
            type: 'u64';
          },
          {
            name: 'minIncreaseAmount';
            type: 'u64';
          },
          {
            name: 'byToken';
            type: 'u64';
          },
          {
            name: 'endDate';
            type: 'i64';
          },
          {
            name: 'lastBidDate';
            type: 'i64';
          },
          {
            name: 'lastBidder';
            type: 'publicKey';
          },
          {
            name: 'highestBid';
            type: 'u64';
          },
          {
            name: 'status';
            type: 'u64';
          }
        ];
      };
    },
    {
      name: 'userData';
      type: {
        kind: 'struct';
        fields: [
          {
            name: 'address';
            type: 'publicKey';
          },
          {
            name: 'tradedVolume';
            type: 'u64';
          },
          {
            name: 'tradedTokenVolume';
            type: 'u64';
          },
          {
            name: 'escrowSolBalance';
            type: 'u64';
          },
          {
            name: 'escrowTokenBalance';
            type: 'u64';
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: 'InvalidSuperOwner';
      msg: 'Invalid Super Owner';
    },
    {
      code: 6001;
      name: 'InvalidOwner';
      msg: 'Invalid Owner';
    },
    {
      code: 6002;
      name: 'InvalidGlobalPool';
      msg: 'Invalid Global Pool Address';
    },
    {
      code: 6003;
      name: 'InvalidFeePercent';
      msg: 'Marketplace Fee is Permyriad';
    },
    {
      code: 6004;
      name: 'MaxTeamCountExceed';
      msg: 'Max Team Count is 8';
    },
    {
      code: 6005;
      name: 'NoTeamTreasuryYet';
      msg: 'Treasury Wallet Not Configured';
    },
    {
      code: 6006;
      name: 'TreasuryAddressNotFound';
      msg: 'Treasury Address Not Exist';
    },
    {
      code: 6007;
      name: 'TreasuryAddressAlreadyAdded';
      msg: 'Treasury Address Already Exist';
    },
    {
      code: 6008;
      name: 'MaxTreasuryRateSumExceed';
      msg: 'Total Treasury Rate Sum Should Less Than 100%';
    },
    {
      code: 6009;
      name: 'TeamTreasuryCountMismatch';
      msg: 'Team Treasury Wallet Count Mismatch';
    },
    {
      code: 6010;
      name: 'TeamTreasuryAddressMismatch';
      msg: 'Team Treasury Wallet Address Mismatch';
    },
    {
      code: 6011;
      name: 'Uninitialized';
      msg: 'Uninitialized Account';
    },
    {
      code: 6012;
      name: 'InvalidParamInput';
      msg: 'Instruction Parameter is Invalid';
    },
    {
      code: 6013;
      name: 'SellerMismatch';
      msg: 'Payer Mismatch with NFT Seller';
    },
    {
      code: 6014;
      name: 'InvalidNFTDataAcount';
      msg: 'Invalid NFT Data Account';
    },
    {
      code: 6015;
      name: 'NotListedNFT';
      msg: 'The NFT Is Not Listed';
    },
    {
      code: 6016;
      name: 'SellerAccountMismatch';
      msg: 'Seller Account Mismatch with NFT Seller Data';
    },
    {
      code: 6017;
      name: 'InsufficientBuyerSolBalance';
      msg: 'Buyer Sol Balance is Less than NFT SOL Price';
    },
    {
      code: 6018;
      name: 'InsufficientBuyerTokenBalance';
      msg: 'Buyer Token Balance is Less than NFT Token Price';
    },
    {
      code: 6019;
      name: 'InvaliedMetadata';
      msg: 'Invalid Metadata Address';
    },
    {
      code: 6020;
      name: 'MetadataCreatorParseError';
      msg: "Can't Parse The NFT's Creators";
    },
    {
      code: 6021;
      name: 'InvalidOfferDataMint';
      msg: 'Offer Data Mint mismatch with NFT Pubkey';
    },
    {
      code: 6022;
      name: 'InvalidOfferDataBuyer';
      msg: 'Offer Data Buyer mismatch with Payer Pubkey';
    },
    {
      code: 6023;
      name: 'OfferForNotListedNFT';
      msg: 'Making Offer for Not Listed NFT';
    },
    {
      code: 6024;
      name: 'InvalidOfferPrice';
      msg: 'Offer Price Over Thank Listed Price';
    },
    {
      code: 6025;
      name: 'DisabledOffer';
      msg: 'Already Canceled Offer';
    },
    {
      code: 6026;
      name: 'OfferForExpiredListingNFT';
      msg: 'Offer For Sold Or Canceled NFT Listing';
    },
    {
      code: 6027;
      name: 'EndedAuction';
      msg: 'Placing Bid For Ended Auction';
    },
    {
      code: 6028;
      name: 'InvalidBidPrice';
      msg: 'Placing Bid With Lower Than Highest Bid';
    },
    {
      code: 6029;
      name: 'DoubleBidFromOneBidder';
      msg: 'Placing Bid Double From One Bidder';
    },
    {
      code: 6030;
      name: 'OutBidderMismatch';
      msg: 'Out Bidder Account Mismatch With LastBidder Data';
    },
    {
      code: 6031;
      name: 'NotEndedAuction';
      msg: 'Claiming Auction For Not Ended Auction';
    },
    {
      code: 6032;
      name: 'CreatorAccountMismatch';
      msg: 'Creator Account Mismatch with Auction Data';
    },
    {
      code: 6033;
      name: 'BidderAccountMismatch';
      msg: 'Bidder Account Mismatch with Auction Data';
    },
    {
      code: 6034;
      name: 'AuctionHasBid';
      msg: 'Canceling Auction which has Bid';
    },
    {
      code: 6035;
      name: 'BidFromAuctionCreator';
      msg: 'Placing Bid From Auction Creator';
    },
    {
      code: 6036;
      name: 'InvalidBump';
      msg: 'Invalid Bump';
    },
    {
      code: 6037;
      name: 'NonZeroError';
      msg: 'Value Must be Non Zero';
    },
    {
      code: 6038;
      name: 'InvalidMinimumIncreaseValue';
      msg: 'Invalid Minimum Increase Value';
    },
    {
      code: 6039;
      name: 'InvalidEndDate';
      msg: 'Invalid End Date';
    },
    {
      code: 6040;
      name: 'MismatchAccountPubkey';
      msg: 'Account Pubkey Does not Matched';
    }
  ];
};

export const IDL: LnSolanaMarketplace = {
  version: '0.1.0',
  name: 'ln_solana_marketplace',
  instructions: [
    {
      name: 'initialize',
      docs: [
        "* Initialize global PDA\n     *\n     * This will save the payer address as the program's super_admin\n     * Initialize the escrow Vault PDA\n     *\n     * Params: global pda bump, escrow pda bump",
      ],
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'updateFee',
      docs: [
        '* Update marketplace fee info in the Global PDA as super_admin\n     *\n     * Params:  global pda bump\n     *          sol_fee - marketplace fee as Permyraid for SOL NFT purchasing\n     *          token_fee - marketplace fee as Permyraid for ABB NFT purchasing',
      ],
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'solFee',
          type: 'u64',
        },
        {
          name: 'tokenFee',
          type: 'u64',
        },
      ],
    },
    {
      name: 'addTeamTreasury',
      docs: [
        '* Add team treasury account\n     *\n     * Params: global pda bump\n     *          treasury address\n     *          distribution rate by permyriad',
      ],
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'address',
          type: 'publicKey',
        },
        {
          name: 'rate',
          type: 'u64',
        },
      ],
    },
    {
      name: 'removeTeamTreasury',
      docs: [
        '* Remove team treasury account\n     *\n     * Params: global pda bump\n     *          treasury address',
      ],
      accounts: [
        {
          name: 'admin',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'address',
          type: 'publicKey',
        },
      ],
    },
    {
      name: 'initUserPool',
      docs: ['* Initialize User PDA for Escrow & Traded Volume'],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'initSellData',
      docs: ['* Init NFT listed info - Sell Data PDA'],
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nft',
          type: 'publicKey',
        },
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'listNftForSale',
      docs: [
        '* List NFT for sale\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          price_sol is the selling price in sol\n     *          price_token is the selling price in abb',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'mintMetadata',
          isMut: true,
          isSigner: false,
          docs: ['the mint metadata'],
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenMetadataProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'sellBump',
          type: 'u8',
        },
        {
          name: 'priceSol',
          type: 'u64',
        },
        {
          name: 'priceToken',
          type: 'u64',
        },
      ],
    },
    {
      name: 'delistNft',
      docs: [
        '* Cancel NFT lising\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'sellBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'purchase',
      docs: [
        '* Purchase listed NFT in "Buy Now" price\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          seller user pda bump\n     *          buyer user pda bump\n     *          by_token is true when purchasing with abb tokens',
      ],
      accounts: [
        {
          name: 'buyer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'buyerUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'seller',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellerUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellerTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'nftBump',
          type: 'u8',
        },
        {
          name: 'buyerBump',
          type: 'u8',
        },
        {
          name: 'sellerBump',
          type: 'u8',
        },
        {
          name: 'byToken',
          type: 'u8',
        },
      ],
    },
    {
      name: 'depositToEscrow',
      docs: [
        '* Deposit funds to escrow balance\n     *\n     * Params:  user pda bump\n     *          escrow vault bump\n     *          sol is depositing amount\n     *          token is depositing abb amount',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'userBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
        {
          name: 'sol',
          type: 'u64',
        },
        {
          name: 'token',
          type: 'u64',
        },
      ],
    },
    {
      name: 'withdrawFromEscrow',
      docs: [
        '* Withdraw funds from escrow balance\n     *\n     * Params:  user pda bump\n     *          escrow vault bump\n     *          sol - withdrawing amount\n     *          token - withdrawing abb amount',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'userBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
        {
          name: 'sol',
          type: 'u64',
        },
        {
          name: 'token',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initOfferData',
      docs: [
        '* Init offer data pda\n     *\n     * Params:  nft - NFT address for offering\n     *          offer data pda bump',
      ],
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'offerDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nft',
          type: 'publicKey',
        },
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'makeOffer',
      docs: [
        '* Make an offer for a particular NFT\n     *\n     * Params:  nft sell data pda bump\n     *          offer data pda bump\n     *          user pda bump\n     *          escrow vault bump\n     *          price - offer price\n     *          by_token - offering by abb',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'offerDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'userPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nftBump',
          type: 'u8',
        },
        {
          name: 'offerBump',
          type: 'u8',
        },
        {
          name: 'userBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
        {
          name: 'price',
          type: 'u64',
        },
        {
          name: 'byToken',
          type: 'u64',
        },
      ],
    },
    {
      name: 'cancelOffer',
      docs: ['* Cancel offer\n     *\n     * Params: offer data pda bump'],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'offerDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'offerBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'acceptOffer',
      docs: [
        '* Sell NFT in offer price\n     *\n     * Params:  global pda bump\n     *          nft sell data pda bump\n     *          offer data bump\n     *          buyer user pda bump\n     *          seller user pda bump\n     *          escrow vault bump',
      ],
      accounts: [
        {
          name: 'seller',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'sellDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'buyer',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'offerDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'sellerUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'buyerUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'nftBump',
          type: 'u8',
        },
        {
          name: 'offerBump',
          type: 'u8',
        },
        {
          name: 'buyerBump',
          type: 'u8',
        },
        {
          name: 'sellerBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'initAuctionData',
      docs: [
        '* Init auction data pda\n     *\n     * Params:  nft - NFT address to start auction\n     *          auctiond data pda bump',
      ],
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'auctionDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'nft',
          type: 'publicKey',
        },
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'createAuction',
      docs: [
        '* Start an auction for NFT\n     *\n     * Params:  global pda bump\n     *          auction pda bump\n     *          start_price - Bidding start price\n     *          min_increase - Minimum inscrease amount of next bidding price\n     *          by_token - auction selling by abb\n     *          end_date - auction end date',
      ],
      accounts: [
        {
          name: 'owner',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'auctionDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'auctionBump',
          type: 'u8',
        },
        {
          name: 'startPrice',
          type: 'u64',
        },
        {
          name: 'minIncrease',
          type: 'u64',
        },
        {
          name: 'byToken',
          type: 'u64',
        },
        {
          name: 'endDate',
          type: 'i64',
        },
      ],
    },
    {
      name: 'placeBid',
      docs: [
        '* Place a bid for an auction\n     *\n     * Params:  auction pda bump\n     *          escrow vault pda bump\n     *          price - bidding price',
      ],
      accounts: [
        {
          name: 'bidder',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'auctionDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bidderTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outBidder',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outBidderTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'auctionBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
        {
          name: 'price',
          type: 'u64',
        },
      ],
    },
    {
      name: 'claimAuction',
      docs: [
        '* Claim NFT for won auction\n     *\n     * Params: global pda bump\n     *          escrow vault bump',
      ],
      accounts: [
        {
          name: 'bidder',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'auctionDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'escrowVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'escrowTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bidderUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creator',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creatorTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'creatorUserPool',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'auctionBump',
          type: 'u8',
        },
        {
          name: 'escrowBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'cancelAuction',
      docs: [
        '* Cancel auction has no bid until end date\n     *\n     * Params: global pda bump\n     *          auctiond data pda bump',
      ],
      accounts: [
        {
          name: 'creator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'globalAuthority',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'auctionDataInfo',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'userTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'destNftTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'globalBump',
          type: 'u8',
        },
        {
          name: 'auctionBump',
          type: 'u8',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'globalPool',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'superAdmin',
            type: 'publicKey',
          },
          {
            name: 'marketFeeSol',
            type: 'u64',
          },
          {
            name: 'marketFeeToken',
            type: 'u64',
          },
          {
            name: 'teamCount',
            type: 'u64',
          },
          {
            name: 'teamTreasury',
            type: {
              array: ['publicKey', 8],
            },
          },
          {
            name: 'treasuryRate',
            type: {
              array: ['u64', 8],
            },
          },
        ],
      },
    },
    {
      name: 'sellData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'seller',
            type: 'publicKey',
          },
          {
            name: 'collection',
            type: 'publicKey',
          },
          {
            name: 'priceSol',
            type: 'u64',
          },
          {
            name: 'priceToken',
            type: 'u64',
          },
          {
            name: 'listedDate',
            type: 'i64',
          },
          {
            name: 'active',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'offerData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'buyer',
            type: 'publicKey',
          },
          {
            name: 'offerPrice',
            type: 'u64',
          },
          {
            name: 'offerListingDate',
            type: 'i64',
          },
          {
            name: 'byToken',
            type: 'u64',
          },
          {
            name: 'active',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'auctionData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'creator',
            type: 'publicKey',
          },
          {
            name: 'startPrice',
            type: 'u64',
          },
          {
            name: 'minIncreaseAmount',
            type: 'u64',
          },
          {
            name: 'byToken',
            type: 'u64',
          },
          {
            name: 'endDate',
            type: 'i64',
          },
          {
            name: 'lastBidDate',
            type: 'i64',
          },
          {
            name: 'lastBidder',
            type: 'publicKey',
          },
          {
            name: 'highestBid',
            type: 'u64',
          },
          {
            name: 'status',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'userData',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'address',
            type: 'publicKey',
          },
          {
            name: 'tradedVolume',
            type: 'u64',
          },
          {
            name: 'tradedTokenVolume',
            type: 'u64',
          },
          {
            name: 'escrowSolBalance',
            type: 'u64',
          },
          {
            name: 'escrowTokenBalance',
            type: 'u64',
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'InvalidSuperOwner',
      msg: 'Invalid Super Owner',
    },
    {
      code: 6001,
      name: 'InvalidOwner',
      msg: 'Invalid Owner',
    },
    {
      code: 6002,
      name: 'InvalidGlobalPool',
      msg: 'Invalid Global Pool Address',
    },
    {
      code: 6003,
      name: 'InvalidFeePercent',
      msg: 'Marketplace Fee is Permyriad',
    },
    {
      code: 6004,
      name: 'MaxTeamCountExceed',
      msg: 'Max Team Count is 8',
    },
    {
      code: 6005,
      name: 'NoTeamTreasuryYet',
      msg: 'Treasury Wallet Not Configured',
    },
    {
      code: 6006,
      name: 'TreasuryAddressNotFound',
      msg: 'Treasury Address Not Exist',
    },
    {
      code: 6007,
      name: 'TreasuryAddressAlreadyAdded',
      msg: 'Treasury Address Already Exist',
    },
    {
      code: 6008,
      name: 'MaxTreasuryRateSumExceed',
      msg: 'Total Treasury Rate Sum Should Less Than 100%',
    },
    {
      code: 6009,
      name: 'TeamTreasuryCountMismatch',
      msg: 'Team Treasury Wallet Count Mismatch',
    },
    {
      code: 6010,
      name: 'TeamTreasuryAddressMismatch',
      msg: 'Team Treasury Wallet Address Mismatch',
    },
    {
      code: 6011,
      name: 'Uninitialized',
      msg: 'Uninitialized Account',
    },
    {
      code: 6012,
      name: 'InvalidParamInput',
      msg: 'Instruction Parameter is Invalid',
    },
    {
      code: 6013,
      name: 'SellerMismatch',
      msg: 'Payer Mismatch with NFT Seller',
    },
    {
      code: 6014,
      name: 'InvalidNFTDataAcount',
      msg: 'Invalid NFT Data Account',
    },
    {
      code: 6015,
      name: 'NotListedNFT',
      msg: 'The NFT Is Not Listed',
    },
    {
      code: 6016,
      name: 'SellerAccountMismatch',
      msg: 'Seller Account Mismatch with NFT Seller Data',
    },
    {
      code: 6017,
      name: 'InsufficientBuyerSolBalance',
      msg: 'Buyer Sol Balance is Less than NFT SOL Price',
    },
    {
      code: 6018,
      name: 'InsufficientBuyerTokenBalance',
      msg: 'Buyer Token Balance is Less than NFT Token Price',
    },
    {
      code: 6019,
      name: 'InvaliedMetadata',
      msg: 'Invalid Metadata Address',
    },
    {
      code: 6020,
      name: 'MetadataCreatorParseError',
      msg: "Can't Parse The NFT's Creators",
    },
    {
      code: 6021,
      name: 'InvalidOfferDataMint',
      msg: 'Offer Data Mint mismatch with NFT Pubkey',
    },
    {
      code: 6022,
      name: 'InvalidOfferDataBuyer',
      msg: 'Offer Data Buyer mismatch with Payer Pubkey',
    },
    {
      code: 6023,
      name: 'OfferForNotListedNFT',
      msg: 'Making Offer for Not Listed NFT',
    },
    {
      code: 6024,
      name: 'InvalidOfferPrice',
      msg: 'Offer Price Over Thank Listed Price',
    },
    {
      code: 6025,
      name: 'DisabledOffer',
      msg: 'Already Canceled Offer',
    },
    {
      code: 6026,
      name: 'OfferForExpiredListingNFT',
      msg: 'Offer For Sold Or Canceled NFT Listing',
    },
    {
      code: 6027,
      name: 'EndedAuction',
      msg: 'Placing Bid For Ended Auction',
    },
    {
      code: 6028,
      name: 'InvalidBidPrice',
      msg: 'Placing Bid With Lower Than Highest Bid',
    },
    {
      code: 6029,
      name: 'DoubleBidFromOneBidder',
      msg: 'Placing Bid Double From One Bidder',
    },
    {
      code: 6030,
      name: 'OutBidderMismatch',
      msg: 'Out Bidder Account Mismatch With LastBidder Data',
    },
    {
      code: 6031,
      name: 'NotEndedAuction',
      msg: 'Claiming Auction For Not Ended Auction',
    },
    {
      code: 6032,
      name: 'CreatorAccountMismatch',
      msg: 'Creator Account Mismatch with Auction Data',
    },
    {
      code: 6033,
      name: 'BidderAccountMismatch',
      msg: 'Bidder Account Mismatch with Auction Data',
    },
    {
      code: 6034,
      name: 'AuctionHasBid',
      msg: 'Canceling Auction which has Bid',
    },
    {
      code: 6035,
      name: 'BidFromAuctionCreator',
      msg: 'Placing Bid From Auction Creator',
    },
    {
      code: 6036,
      name: 'InvalidBump',
      msg: 'Invalid Bump',
    },
    {
      code: 6037,
      name: 'NonZeroError',
      msg: 'Value Must be Non Zero',
    },
    {
      code: 6038,
      name: 'InvalidMinimumIncreaseValue',
      msg: 'Invalid Minimum Increase Value',
    },
    {
      code: 6039,
      name: 'InvalidEndDate',
      msg: 'Invalid End Date',
    },
    {
      code: 6040,
      name: 'MismatchAccountPubkey',
      msg: 'Account Pubkey Does not Matched',
    },
  ],
};
