import { API_ENDPOINT } from "../../config/constants";
import { Match, MatchesActions } from "./types";

export const fetchMatches = async (
  dispatch: React.Dispatch<MatchesActions>,
) => {
  dispatch({ type: "FETCH_MATCHES_REQUEST" });
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: data.matches });
    data?.matches.map((match: Match) => refreshMatches(dispatch, match.id));
  } catch (error) {
    console.log("Error fetching preferences:", error);
  }
};

export const refreshMatches = async (
  dispatch: React.Dispatch<MatchesActions>,
  id: number,
) => {
  dispatch({ type: "REFRESH_MATCH" });
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "REFRESH_MATCH_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching preferences:", error);
  }
};
