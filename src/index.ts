import { CharacterRepository } from "./repository/characterRepository";
import { DuelCombatService } from "./service/DualCombatService";

const characterRepository = new CharacterRepository();
const arthur = characterRepository.getByName("Arthur");
const merlin = characterRepository.getByName("Merlin");

const duelCombatService: DuelCombatService = new DuelCombatService(
  arthur,
  merlin,
);
console.log(arthur);
console.log(merlin);
// console.log(combat.getTeams().getDefenders());

duelCombatService.fight();

// console.log(merlin.getSpellSlots());
merlin.setHealthPoints(55);
console.log(duelCombatService.duelCombat.combatLog.prettify());
// console.log(JSON.stringify(duelCombatService.duelCombat.combatLog));
