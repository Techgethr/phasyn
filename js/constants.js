var contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "addComment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "closeProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "contributeToClub",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "minimumToEnter",
				"type": "uint256"
			}
		],
		"name": "createClub",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "destination",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "executeProposal",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "joinClub",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "leaveClub",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "vote",
				"type": "bool"
			}
		],
		"name": "voteOnProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "getBalanceByClub",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "getClubById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "memberCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "proposalCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "pool",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minimumToEnter",
						"type": "uint256"
					}
				],
				"internalType": "struct InvestmentClub.ClubInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "getComments",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "commenter",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "text",
						"type": "string"
					}
				],
				"internalType": "struct ClubLibrary.Comment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyClubs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "memberCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "proposalCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "pool",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minimumToEnter",
						"type": "uint256"
					}
				],
				"internalType": "struct InvestmentClub.ClubInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			}
		],
		"name": "getProposalById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "destination",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "votesFor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "votesAgainst",
						"type": "uint256"
					}
				],
				"internalType": "struct InvestmentClub.ProposalInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "getProposalsByClub",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "destination",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "votesFor",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "votesAgainst",
						"type": "uint256"
					}
				],
				"internalType": "struct InvestmentClub.ProposalInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "hasVoted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "isClubIdExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "memberAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "isMemberOfClub",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "proposalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			}
		],
		"name": "isProposalIdExist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "listClubs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "memberCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "proposalCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "pool",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minimumToEnter",
						"type": "uint256"
					}
				],
				"internalType": "struct InvestmentClub.ClubInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var investmentContractAddress = '0xd0876600e82CCAa4aA0ab0Cd8bEa9c74F5b46De3';