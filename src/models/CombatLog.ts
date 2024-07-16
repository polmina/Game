import { CombatEvent } from "./events/CombatEvent";

export class CombatLog {
  combatEvents: CombatEvent[];

  constructor() {
    this.combatEvents = [];
  }

  addCombatEvent(event: CombatEvent) {
    this.combatEvents.push(event);
  }

  prettify() {
    const combatEvents: CombatEvent[] = this.combatEvents;
    for (const combatEvent of combatEvents) {
      console.log(combatEvent.prettify());
    }
  }
}
