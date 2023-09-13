import { API_ENDPOINT } from "../../config/constants";
import { TeamsActions } from "./types";

export const fetchTeams = async (dispatch: React.Dispatch<TeamsActions>) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_TEAMS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching teams:", error);
  }
};
