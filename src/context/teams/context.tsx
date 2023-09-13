import React, { createContext, useContext, useReducer } from "react";
import { teamsReducer, initialState } from "./reducer";
import { Team, TeamsActions } from "./types";
const TeamsStateContext = createContext<Team[]>(initialState);
type TeamsDispatch = React.Dispatch<TeamsActions>;
const TeamsDispatchContext = createContext<TeamsDispatch>(() => {});

export const useTeamsState = () => useContext(TeamsStateContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(teamsReducer, initialState);

  return (
    <TeamsStateContext.Provider value={state}>
      <TeamsDispatchContext.Provider value={dispatch}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsStateContext.Provider>
  );
};
