export interface TopCountry {
  country: string;
  customers: number;
}

export interface ChartOptions {
  height?: number;
  width?: number;
}

export interface NumbersConfig {
  min?: number;
  max?: number;
  count?: number;
  from?: number;
  decimals?: number;
  continuity?: number;
}

export interface MonthsConfig {
  count?: number;
  section?: number;
}
