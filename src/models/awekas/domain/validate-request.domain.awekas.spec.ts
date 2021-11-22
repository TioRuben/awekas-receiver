// @ts-nocheck
import { AwekasQuery } from "../awekas.model";
import { validateRequest } from "./validate-request.domain.awekas";

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

describe("validateRequest validates an Awekas request", () => {
  it("Should be valid if request is ok", () => {
    expect(validateRequest(correctRequest)).toBeTruthy();
  });

  it("Should return false if any of requirements is not correct", () => {
    expect(validateRequest({ ...correctRequest, ID: undefined })).toBeFalsy();
    expect(validateRequest({ ...correctRequest, ID: "" })).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, PASSWORD: undefined })
    ).toBeFalsy();
    expect(validateRequest({ ...correctRequest, PASSWORD: "" })).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, action: undefined })
    ).toBeFalsy();
    expect(validateRequest({ ...correctRequest, action: "test" })).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, realtime: undefined })
    ).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, realtime: "other" })
    ).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, dateutc: undefined })
    ).toBeFalsy();
    expect(
      validateRequest({ ...correctRequest, dateutc: "other" })
    ).toBeFalsy();
  });

  it("Should not fail if null or undefined", () => {
    expect(validateRequest(null)).toBeFalsy();
    expect(validateRequest(undefined)).toBeFalsy();
  });
});
