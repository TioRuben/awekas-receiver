import { Awekas } from "../awekas.model";

export const toSI = (value: Awekas): Awekas =>
  value && {
    barometer: value.barometer * 33.86389,
    temperature: (value.temperature - 32) / 1.8,
    dewPoint: (value.dewPoint - 32) / 1.8,
    humidity: value.humidity,
    windSpeed: value.windSpeed * 1.61,
    windGust: value.windGust * 1.61,
    windDirection: value.windDirection,
    rain: value.rain * 25.4,
    dailyRain: value.dailyRain * 25.4,
    solarRadiation: value.solarRadiation,
    uv: value.uv,
    indoorTemperature: (value.indoorTemperature - 32) / 1.8,
    indoorHumidity: value.indoorHumidity,
  };
