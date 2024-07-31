export interface SendLocalListRequest {
  listVersion: number;
  localAuthorizationList?: {
    idTag: string;
    idTagInfo?: {
      status: 'Accepted' | 'Blocked' | 'Expired' | 'Invalid' | 'ConcurrentTx';
      expiryDate?: string;
      parentIdTag?: string;
    };
  }[];
  updateType: 'Differential' | 'Full';
}

export interface SendLocalListResponse {
  status: 'Accepted' | 'Failed' | 'NotSupported' | 'VersionMismatch';
}
