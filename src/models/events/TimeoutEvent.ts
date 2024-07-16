import { CombatEvent } from "./CombatEvent";

export class TimeoutEvent implements CombatEvent {
  prettify(): string {
    return `Combat timeout! No winners today`;
  }
}
