import machines from "../data/machines.json";
import { Machine } from "../model/machine";

export async function getMachines(): Promise<Machine[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(machines);
    }, 2000);
  });
}
