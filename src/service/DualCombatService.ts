import { DuelCombat } from "../models/DuelCombat";
import { AttackType, Character } from "../models/character/Character";
import { Action } from "../models/equipment/Action";
import { AttackEvent } from "../models/events/AttackEvent";
import { ResultEvent } from "../models/events/ResultEvent";

export class DuelCombatService {
  duelCombat: DuelCombat;

  constructor(attacker: Character, defender: Character) {
    this.duelCombat = new DuelCombat().withTeams(attacker, defender);
  }

  fight() {
    const duelCombat: DuelCombat = this.duelCombat;
    const attacker: Character = duelCombat.teams.attackers[0];
    const defender: Character = duelCombat.teams.defenders[0];

    while (duelCombat.currentTurn <= this.duelCombat.MAX_TURNS) {
      const attackerAction: Action = attacker.getBestAttackAction();

      const attackEvent: AttackEvent = attacker.attack(
        defender,
        attackerAction,
      );

      duelCombat.combatLog.addCombatEvent(attackEvent);

      if (defender.isDead()) {
        duelCombat.combatLog.addCombatEvent(new ResultEvent(attacker));
        break;
      }

      const defenderAction: Action = defender.getBestAttackAction();
      const defenseEvent = defender.attack(attacker, defenderAction);

      duelCombat.combatLog.addCombatEvent(defenseEvent);

      if (attacker.isDead()) {
        duelCombat.combatLog.addCombatEvent(new ResultEvent(defender));
        break;
      }

      duelCombat.increaseCurrentTurn();
    }
  }
}
