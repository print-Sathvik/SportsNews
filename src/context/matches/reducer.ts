import { Match, MatchesActions, MatchesState } from "./types";

export const initialState: MatchesState = {
  matches: [],
  isLoading: true,
};

export const matchesReducer = (
  state: MatchesState = initialState,
  action: MatchesActions,
): MatchesState => {
  switch (action.type) {
    case "FETCH_MATCHES_REQUEST":
    case "REFRESH_MATCH":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MATCHES_SUCCESS":
      return {
        matches: action.payload,
        isLoading: false,
      };
    case "REFRESH_MATCH_SUCCESS":
      return {
        matches: [
          ...state.matches.filter((match) => match.id !== action.payload.id),
          action.payload,
        ],
        isLoading: false,
      };
    default:
      return state;
  }
};
