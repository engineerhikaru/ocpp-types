export type ResetRequest = {
  type: 'Hard' | 'Soft';
};

export type ResetResponse = {
  status: 'Accepted' | 'Rejected';
};
