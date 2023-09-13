export interface Team {
  id: number;
  name: string;
  plays?: string;
}

export type TeamsActions = { type: "FETCH_TEAMS_SUCCESS"; payload: Team[] };
