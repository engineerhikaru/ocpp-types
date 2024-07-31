export type DataTransferRequest = {
  vendorId: string;
  messageId?: string;
  data?: string;
};

export type DataTransferResponse = {
  status: 'Accepted' | 'Rejected' | 'UnknownMessageId' | 'UnknownVendorId';
  data?: string;
};
