import Services from "../../../services";
import { Awekas } from "../awekas.model";

export const addMeasurement =
  (measurement: Awekas) =>
  (sensorId: string): Promise<boolean> =>
    Services.Influx.addMeasure(measurement)(sensorId).then(() => true);
