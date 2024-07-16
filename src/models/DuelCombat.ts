import { CombatLog } from "./CombatLog";
import { Teams } from "./Teams";
import { Character } from "./character/Character";

export const INITIAL_TURN = 1;

export class DuelCombat {
  MAX_TURNS = 100;
  combatLog: CombatLog;
  teams: Teams;
  currentTurn: number;

  constructor() {
    this.combatLog = new CombatLog();
    this.currentTurn = INITIAL_TURN;
  }

  withTeams(attacker: Character, defender: Character): DuelCombat {
    const teams = new Teams();
    teams.attackers = [attacker];
    teams.defenders = [defender];
    this.teams = teams;
    return this;
  }

  increaseCurrentTurn(): void {
    this.currentTurn = this.currentTurn + 1;
  }
}
