export interface DataTransferRequest {
  vendorId: string;
  messageId?: string;
  data?: string;
}

export interface DataTransferResponse {
  status: 'Accepted' | 'Rejected' | 'UnknownMessageId' | 'UnknownVendorId';
  data?: string;
}
