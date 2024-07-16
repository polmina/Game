import spells from "../../mocks/spells.json";
import { Spell } from "../models/equipment/Spell";

export class SpellsRepository {
  getByName(name: String) {
    const spellStats = spells.find((spell) => spell.name === name);
    if (!spellStats) throw new Error(`Spell with name ${name} not found`);

    return Object.assign(new Spell(), spellStats);
  }

  getByNames(name: String[]) {
    const spellsStats = spells.filter((spell) => name.includes(spell.name));

    return spellsStats.map((spellStat) =>
      Object.assign(new Spell(), spellStat),
    );
  }
}
