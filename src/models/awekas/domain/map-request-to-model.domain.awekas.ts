import { Awekas, AwekasQuery } from "../awekas.model";
import { toSI } from "./convert-si.domain.awekas";

export const mapRequestToModel = (request: AwekasQuery): Awekas =>
  request &&
  toSI({
    barometer: +request.baromin,
    temperature: +request.tempf,
    dewPoint: +request.dewptf,
    humidity: +request.humidity,
    windSpeed: +request.windspeedmph,
    windGust: +request.windgustmph,
    windDirection: +request.winddir,
    rain: +request.rainin,
    dailyRain: +request.dailyrainin,
    solarRadiation: +request.solarradiation,
    uv: +request.UV,
    indoorTemperature: +request.indoortempf,
    indoorHumidity: +request.indoorhumidity,
  });
