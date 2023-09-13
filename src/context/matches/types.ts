import { Team } from "../teams/types";

export interface Match {
  id: number;
  isRunning: boolean;
  name: string;
  location: string;
  startsAt?: string;
  endsAt: string;
  score?: { [key: string]: string };
  teams: Team[];
  sportName: string;
  playingTeam?: number;
  story?: string;
  refreshMatch?: () => void;
}

export interface MatchesState {
  matches: Match[];
  isLoading: boolean;
}

export type MatchesActions =
  | { type: "FETCH_MATCHES_REQUEST" }
  | { type: "FETCH_MATCHES_SUCCESS"; payload: Match[] }
  | { type: "REFRESH_MATCH" }
  | { type: "REFRESH_MATCH_SUCCESS"; payload: Match };
