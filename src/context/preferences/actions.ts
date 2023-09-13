import { API_ENDPOINT } from "../../config/constants";
import { Preference, PreferencesActions } from "./types";

export const fetchPreferences = async (
  dispatch: React.Dispatch<PreferencesActions>,
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "FETCH_PREFERENCES_REQUEST",
      payload: {
        sports: data.preferences?.sports ?? [],
        teams: data.preferences?.teams ?? [],
      },
    });
  } catch (error) {
    console.log("Error fetching preferences:", error);
  }
};

export const updatePreferences = async (
  dispatch: React.Dispatch<PreferencesActions>,
  preferences: Preference,
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        preferences: preferences,
      }),
    });
    const data = await response.json();
    dispatch({ type: "PATCH_PREFERENCES_REQUEST", payload: preferences });
  } catch (error) {
    console.log("Error fetching preferences:", error);
  }
};
