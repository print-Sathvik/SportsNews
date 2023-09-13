import { Team, TeamsActions } from "./types";

export const initialState: Team[] = [];

export const teamsReducer = (
  state: Team[] = initialState,
  action: TeamsActions,
): Team[] => {
  switch (action.type) {
    case "FETCH_TEAMS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
