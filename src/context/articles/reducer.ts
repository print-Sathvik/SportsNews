import { ArticlesState, ArticlesActions, Sport, SportsActions } from "./types";

export const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const articlesReducer = (
  state: ArticlesState = initialState,
  action: ArticlesActions,
): ArticlesState => {
  switch (action.type) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case "FETCH_ARTICLES_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export const sportsReducer = (
  state: Sport[] = [],
  action: SportsActions,
): Sport[] => {
  switch (action.type) {
    case "FETCH_SPORTS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
