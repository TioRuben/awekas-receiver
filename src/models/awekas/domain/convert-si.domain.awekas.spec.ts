// @ts-nocheck
import { toSI } from "./convert-si.domain.awekas";

describe("toSI converts request to SI units", () => {
  it("Should convert to SI correctly", () => {
    expect(
      toSI({
        barometer: 29.74,
        temperature: 63.8,
        dewPoint: 50.5,
        humidity: 52,
        windSpeed: 2.2,
        windGust: 2.2,
        windDirection: 324,
        rain: 1,
        dailyRain: 2,
        solarRadiation: 212.98,
        uv: 1.9,
        indoorTemperature: 69.4,
        indoorHumidity: 62,
      })
    ).toEqual({
      barometer: 1007.1120885999999,
      dailyRain: 50.8,
      dewPoint: 10.277777777777777,
      humidity: 52,
      indoorHumidity: 62,
      indoorTemperature: 20.777777777777782,
      rain: 25.4,
      solarRadiation: 212.98,
      temperature: 17.666666666666664,
      uv: 1.9,
      windDirection: 324,
      windGust: 3.5420000000000007,
      windSpeed: 3.5420000000000007,
    });
  });

  it("Should not fail if value is null or undefined", () => {
    expect(toSI(null)).toBeNull();
    expect(toSI(undefined)).toBeUndefined();
  });
});
