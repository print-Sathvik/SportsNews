import React, { createContext, useContext, useReducer } from "react";
import { matchesReducer, initialState } from "./reducer";
import { MatchesState, MatchesActions } from "./types";
const MatchesStateContext = createContext<MatchesState>(initialState);
type MatchesDispatch = React.Dispatch<MatchesActions>;
const MatchesDispatchContext = createContext<MatchesDispatch>(() => {});

export const useMatchesState = () => useContext(MatchesStateContext);
export const useMatchesDispatch = () => useContext(MatchesDispatchContext);

export const MatchesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(matchesReducer, initialState);

  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispatch}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};
