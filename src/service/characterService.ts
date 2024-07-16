import { CharacterRepository } from "../repository/characterRepository";
import { WeaponRepository } from "../repository/weaponsRepository";

export class CharacterService {
  characterRepository: CharacterRepository;
  weaponRepository: WeaponRepository;

  constructor() {
    this.characterRepository = new CharacterRepository();
    this.weaponRepository = new WeaponRepository();
  }
  loadCharacter() { }
}
