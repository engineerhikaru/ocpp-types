export type CancelReservationRequest = {
  reservationId: number;
};

export type CancelReservationResponse = {
  status: 'Accepted' | 'Rejected';
};
