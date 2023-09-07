import React, { createContext, useContext, useReducer } from "react";
import {
  reducer,
  initialState,
  ArticlesState,
  ArticlesActions,
} from "./reducer";
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};
