import { Preference, PreferencesActions } from "./types";

export const initialState: Preference = {
  sports: [],
  teams: [],
};

export const preferencesReducer = (
  state: Preference = initialState,
  action: PreferencesActions,
): Preference => {
  switch (action.type) {
    case "FETCH_PREFERENCES_REQUEST":
      return action.payload;
    case "PATCH_PREFERENCES_REQUEST":
      return action.payload;
    default:
      return state;
  }
};
