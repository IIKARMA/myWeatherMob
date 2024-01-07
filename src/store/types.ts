export interface WeatherStates {
  cityName: string;
  weatherToday: unknown;
  weatherTreDays: unknown[];
  weatherTwoWeek: unknown;
}
export interface getWeatherArg {
    city: string;
    days: number;
  }