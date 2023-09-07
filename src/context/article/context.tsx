import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { ArticleState, ArticleActions } from "./types";
const ArticleStateContext = createContext<ArticleState>(initialState);
type ArticleDispatch = React.Dispatch<ArticleActions>;
const ArticleDispatchContext = createContext<ArticleDispatch>(() => {});

export const useArticleState = () => useContext(ArticleStateContext);
export const useArticleDispatch = () => useContext(ArticleDispatchContext);

export const ArticleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ArticleStateContext.Provider value={state}>
      <ArticleDispatchContext.Provider value={dispatch}>
        {children}
      </ArticleDispatchContext.Provider>
    </ArticleStateContext.Provider>
  );
};
