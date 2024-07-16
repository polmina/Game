import { Character } from "../character/Character";
import { CombatEvent } from "./CombatEvent";

export class ResultEvent implements CombatEvent {
  winner: Character;

  constructor(winner: Character) {
    this.winner = winner;
  }
  prettify(): string {
    return `Winner is ${this.winner.name}!`;
  }
}
