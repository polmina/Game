import weapons from "../../mocks/weapons.json";
import { Weapon } from "../models/equipment/Weapon";

export class WeaponsRepository {
  getByName(name: string): Weapon {
    const weaponStats = weapons.find((character) => character.name === name);
    if (!weaponStats) throw new Error(`Weapon with name ${name} not found`);

    return Object.assign(new Weapon(), weaponStats);
  }
}
