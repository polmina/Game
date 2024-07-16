import characters from "../../mocks/characters.json";
import { Character } from "../models/character/Character";
import { HealthPoints } from "../models/character/HealthPoints";
import { Stats } from "../models/character/Stats";
import { Equipment } from "../models/equipment/Equipment";
import { Spell } from "../models/equipment/Spell";
import { Weapon } from "../models/equipment/Weapon";
import { SpellsRepository } from "./spellsRepository";
import { WeaponsRepository } from "./weaponsRepository";

export class CharacterRepository {
  weaponRepository: WeaponsRepository;
  spellsRepository: SpellsRepository;
  constructor() {
    this.weaponRepository = new WeaponsRepository();
    this.spellsRepository = new SpellsRepository();
  }
  getByName(name: string): Character {
    const characterStats = characters.find(
      (character) => character.name === name,
    );
    if (!characterStats)
      throw new Error(`Character with name ${name} not found`);

    const weapon: Weapon = this.weaponRepository.getByName(
      characterStats.equipment.weapon,
    );

    const spellsKnown: Spell[] = this.spellsRepository.getByNames(
      characterStats.spellsKnown,
    );

    const spellsSlotted: Spell[] = this.spellsRepository.getByNames(
      characterStats.spellsSlotted,
    );

    const healthPoints = new HealthPoints();
    healthPoints.currentHP = characterStats.healthPoints;
    healthPoints.totalHP = characterStats.healthPoints;

    const stats = new Stats();
    stats.strength = characterStats.stats.strength;
    stats.dexterity = characterStats.stats.dexterity;
    stats.intelligence = characterStats.stats.intelligence;

    const equipment = new Equipment();
    equipment.weapon = weapon;

    const character = new Character();
    character.name = characterStats.name;
    character.level = characterStats.level;
    character.healthPoints = healthPoints;
    character.equipment = equipment;
    character.stats = stats;
    character.spellsKnown = spellsKnown;
    character.spellsSlotted = spellsSlotted;

    return character;
  }
}
