export interface Sport {
  id: number;
  name: string;
}
interface Team {
  id: number;
  name: string;
}
export interface Article {
  id: number;
  title: string;
  description?: string;
  thumbnail: string;
  sport: Sport;
  date: string;
  content: string;
  teams: Team[];
  summary?: string;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type ArticlesActions =
  | { type: "FETCH_ARTICLES_REQUEST" }
  | { type: "FETCH_ARTICLES_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ARTICLES_FAILURE"; payload: string };

export type SportsActions = { type: "FETCH_SPORTS_SUCCESS"; payload: Sport[] };
