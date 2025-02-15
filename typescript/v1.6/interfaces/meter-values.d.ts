export interface MeterValuesRequest {
  connectorId: number;
  transactionId?: number;
  meterValue: {
    timestamp: string;
    sampledValue: {
      value: string;
      context?:
        | 'Interruption.Begin'
        | 'Interruption.End'
        | 'Sample.Clock'
        | 'Sample.Periodic'
        | 'Transaction.Begin'
        | 'Transaction.End'
        | 'Trigger'
        | 'Other';
      format?: 'Raw' | 'SignedData';
      measurand?:
        | 'Energy.Active.Export.Register'
        | 'Energy.Active.Import.Register'
        | 'Energy.Reactive.Export.Register'
        | 'Energy.Reactive.Import.Register'
        | 'Energy.Active.Export.Interval'
        | 'Energy.Active.Import.Interval'
        | 'Energy.Reactive.Export.Interval'
        | 'Energy.Reactive.Import.Interval'
        | 'Power.Active.Export'
        | 'Power.Active.Import'
        | 'Power.Offered'
        | 'Power.Reactive.Export'
        | 'Power.Reactive.Import'
        | 'Power.Factor'
        | 'Current.Import'
        | 'Current.Export'
        | 'Current.Offered'
        | 'Voltage'
        | 'Frequency'
        | 'Temperature'
        | 'SoC'
        | 'RPM';
      phase?: 'L1' | 'L2' | 'L3' | 'N' | 'L1-N' | 'L2-N' | 'L3-N' | 'L1-L2' | 'L2-L3' | 'L3-L1';
      location?: 'Cable' | 'EV' | 'Inlet' | 'Outlet' | 'Body';
      unit?:
        | 'Wh'
        | 'kWh'
        | 'varh'
        | 'kvarh'
        | 'W'
        | 'kW'
        | 'VA'
        | 'kVA'
        | 'var'
        | 'kvar'
        | 'A'
        | 'V'
        | 'K'
        | 'Celcius'
        | 'Fahrenheit'
        | 'Percent';
    }[];
  }[];
}

export interface MeterValuesResponse {}
