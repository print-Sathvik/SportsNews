import { Article } from "../articles/types";

export type ArticleActions =
  | { type: "FETCH_ARTICLE_REQUEST" }
  | { type: "FETCH_ARTICLE_SUCCESS"; payload: Article }
  | { type: "FETCH_ARTICLE_FAILURE"; payload: string };

export interface ArticleState {
  article: Article | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
