import { ArticleState, ArticleActions } from "./types";

export const initialState: ArticleState = {
  article: undefined,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: ArticleState = initialState,
  action: ArticleActions,
): ArticleState => {
  switch (action.type) {
    case "FETCH_ARTICLE_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_ARTICLE_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        isLoading: false,
        article: action.payload,
      };
    case "FETCH_ARTICLE_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      console.log("Default")
      return state;
  }
};
