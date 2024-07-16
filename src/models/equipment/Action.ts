import { Character } from "../character/Character";
import { Wearable } from "./Wearable";

export interface Action extends Wearable {
  baseDamage: number;
  calculateDamage(originator: Character): number;
}
