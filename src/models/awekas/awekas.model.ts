export interface Awekas {
  barometer: number;
  temperature: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  rain: number;
  dailyRain: number;
  solarRadiation: number;
  uv: number;
  indoorTemperature: number;
  indoorHumidity: number;
}

export interface AwekasQuery {
  ID: string;
  PASSWORD: string;
  action: string;
  realtime: string;
  rtfreq: string;
  dateutc: string;
  baromin: string;
  tempf: string;
  dewptf: string;
  humidity: string;
  windspeedmph: string;
  windgustmph: string;
  winddir: string;
  rainin: string;
  dailyrainin: string;
  solarradiation: string;
  UV: string;
  indoortempf: string;
  indoorhumidity: string;
}
