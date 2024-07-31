export interface CancelReservationRequest {
  reservationId: number;
}

export interface CancelReservationResponse {
  status: 'Accepted' | 'Rejected';
}
