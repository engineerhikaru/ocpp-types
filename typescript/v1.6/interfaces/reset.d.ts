export interface ResetRequest {
  type: 'Hard' | 'Soft';
}

export interface ResetResponse {
  status: 'Accepted' | 'Rejected';
}
