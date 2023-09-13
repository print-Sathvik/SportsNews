export interface Preference {
  sports: String[];
  teams: String[];
}

export type PreferencesActions =
  | { type: "FETCH_PREFERENCES_REQUEST"; payload: Preference }
  | { type: "PATCH_PREFERENCES_REQUEST"; payload: Preference };
