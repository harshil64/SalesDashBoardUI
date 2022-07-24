export interface RoyaltyTransactions {
    totalRoyalty: number;
    totalRoyaltyPaid: number;
    pendingRoyalty: number;
    royaltyPayments: RoyaltyPayments[];
}

export interface RoyaltyPayments {
    amount: number;
    date: string;
    transactionDetails: string;
}