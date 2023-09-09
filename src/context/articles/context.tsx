import React, { createContext, useContext, useReducer } from "react";
import { articlesReducer, initialState } from "./reducer";
import { ArticlesState, ArticlesActions } from "./types";
const ArticlesStateContext = createContext<ArticlesState>(initialState);
type ArticlesDispatch = React.Dispatch<ArticlesActions>;
const ArticlesDispatchContext = createContext<ArticlesDispatch | undefined>(
  undefined,
);

export const useArticlesState = () => useContext(ArticlesStateContext);
export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);

export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};
