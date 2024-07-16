import { Character } from "../character/Character";
import { Action } from "../equipment/Action";
import { CombatEvent } from "./CombatEvent";

export class AttackEvent implements CombatEvent {
  attacker: Character;
  defender: Character;
  action: Action;
  damageDealt: number;

  prettify(): string {
    const attacker = this.attacker;
    const defender = this.defender;
    const defenderHP = defender.healthPoints;
    return `${attacker.name} hit ${defender.name} with ${this.action.constructor.name} ${this.action.name} and dealt ${this.damageDealt} damage, HP ${defenderHP.currentHP}/${defenderHP.totalHP}`;
  }
}
