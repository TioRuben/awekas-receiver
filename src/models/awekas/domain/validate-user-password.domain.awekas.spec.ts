import { AwekasQuery } from "../awekas.model";
import { validateUserPassword } from "./validate-user-password.domain.awekas";

const correctRequest: AwekasQuery = {
  ID: "test",
  PASSWORD: "test",
  action: "updateraww",
  realtime: "1",
  rtfreq: "5",
  dateutc: "now",
  baromin: "29.74",
  tempf: "63.8",
  dewptf: "50.5",
  humidity: "52",
  windspeedmph: "2.2",
  windgustmph: "2.2",
  winddir: "324",
  rainin: "1",
  dailyrainin: "2",
  solarradiation: "212.98",
  UV: "1",
  indoortempf: "69.4",
  indoorhumidity: "62",
};

jest.mock("../../../services", () => {
  return {
    Auth: {
      validateUserPassword: jest
        .fn()
        .mockImplementation(
          (id, password) => id === "test" && password === "test"
        ),
    },
  };
});

describe("It should validate password correctly", () => {
  it("Should validate password correctly", () => {
    expect(validateUserPassword(correctRequest)).toBe(true);
  });

  it("Should return false if request is null or undefined", () => {
    // @ts-ignore
    expect(validateUserPassword(null)).toBeFalsy();
    // @ts-ignore
    expect(validateUserPassword(undefined)).toBeFalsy();
  });
});
