import { mapRequestToModel } from "./map-request-to-model.domain.awekas";

jest.mock("./convert-si.domain.awekas", () => {
  return { toSI: jest.fn().mockImplementation((value) => value) };
});

describe("mapRequestToModel maps an Awekas Request to its model in SI", () => {
  it("Should map correctly", () => {
    expect(
      mapRequestToModel({
        ID: "test",
        PASSWORD: "test",
        UV: "1",
        action: "test",
        baromin: "29.74",
        dailyrainin: "2",
        dateutc: "test",
        dewptf: "50.5",
        humidity: "52",
        indoortempf: "69.4",
        indoorhumidity: "62",
        rainin: "1",
        solarradiation: "212.98",
        tempf: "63.8",
        winddir: "324",
        realtime: "test",
        rtfreq: "test",
        windgustmph: "2.2",
        windspeedmph: "2.2",
      })
    ).toEqual({
      barometer: 29.74,
      dailyRain: 2,
      dewPoint: 50.5,
      humidity: 52,
      indoorHumidity: 62,
      indoorTemperature: 69.4,
      rain: 1,
      solarRadiation: 212.98,
      temperature: 63.8,
      uv: 1,
      windDirection: 324,
      windGust: 2.2,
      windSpeed: 2.2,
    });
  });

  it("Should not fail if null or undefined", () => {
    // @ts-ignore
    expect(mapRequestToModel(null)).toBeNull();
    // @ts-ignore
    expect(mapRequestToModel(undefined)).toBeUndefined();
  });
});
