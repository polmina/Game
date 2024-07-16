import { Character } from "../character/Character";
import { Action } from "./Action";
import { roundDown } from "../../utils/common";

export class Weapon implements Action {
  name: string;
  baseDamage: number;

  calculateDamage(originator: Character): number {
    return this.baseDamage + roundDown(originator.stats.strength / 2);
  }
}
