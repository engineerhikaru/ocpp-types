export type AuthorizeRequest = {
  idTag: string;
};

export type AuthorizeResponse = {
  idTagInfo: {
    status: 'Accepted' | 'Blocked' | 'Expired' | 'Invalid' | 'ConcurrentTx';
    expiryDate?: string;
    parentIdTag?: string;
  };
};
