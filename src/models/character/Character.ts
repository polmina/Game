import { HealthPoints } from "./HealthPoints";
import { AttackEvent } from "../../models/events/AttackEvent";
import { Equipment } from "../equipment/Equipment";
import { Stats } from "./Stats";
import { Spell } from "../equipment/Spell";
import { Action } from "../equipment/Action";
import { Buff } from "./Buff";
import { deepClone, roundDown, selectRandomFromList } from "../../utils/common";

export enum AttackType {
  WEAPON = "weapon",
  SPELL = "spell",
}
export class Character {
  name: string;
  level: number;
  healthPoints: HealthPoints;
  equipment: Equipment;
  stats: Stats;
  activeBuffs: Buff[];
  spellsSlotted: Spell[];
  spellsKnown: Spell[];

  setHealthPoints(newHP: number) {
    this.healthPoints.currentHP = newHP;
  }

  isDead(): Boolean {
    return this.healthPoints.currentHP <= 0;
  }

  getBestSpell() {
    return selectRandomFromList(this.spellsSlotted);
  }

  getBestAttackAction(): Action {
    if (this.spellsSlotted.length > 0) {
      return this.getBestSpell();
    }

    return this.equipment.weapon;
  }

  getSpellSlots(): number {
    return roundDown(this.stats.intelligence / 10);
  }

  attack(defender: Character, action: Action): AttackEvent {
    const finalDamage = action.calculateDamage(this);
    const newHp: number = defender.healthPoints.currentHP - finalDamage;

    defender.setHealthPoints(newHp);

    const attackEvent = new AttackEvent();
    attackEvent.attacker = deepClone(this) as Character;
    attackEvent.defender = deepClone(defender) as Character;
    attackEvent.action = action;
    attackEvent.damageDealt = finalDamage;

    return attackEvent;
  }
}
