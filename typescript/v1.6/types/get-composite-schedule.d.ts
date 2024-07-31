export type GetCompositeScheduleRequest = {
  connectorId: number;
  duration: number;
  chargingRateUnit?: 'A' | 'W';
};

export type GetCompositeScheduleResponse = {
  status: 'Accepted' | 'Rejected';
  connectorId?: number;
  scheduleStart?: string;
  chargingSchedule?: {
    duration?: number;
    startSchedule?: string;
    chargingRateUnit: 'A' | 'W';
    chargingSchedulePeriod: {
      startPeriod: number;
      limit: number;
      numberPhases?: number;
    }[];
    minChargingRate?: number;
  };
};
