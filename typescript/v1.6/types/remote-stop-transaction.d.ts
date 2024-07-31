export type RemoteStopTransactionRequest = {
  transactionId: number;
};

export type RemoteStopTransactionResponse = {
  status: 'Accepted' | 'Rejected';
};
