import { API_ENDPOINT } from "../../config/constants";

export const fetchArticle = async (dispatch: any, articleID: string) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_ARTICLE_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles/${articleID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_ARTICLE_SUCCESS", payload: data });
    console.log("Dispatched", data, dispatch);
  } catch (error) {
    console.log("Error fetching articles:", error);
    dispatch({
      type: "FETCH_ARTICLE_FAILURE",
      payload: "Unable to load articles",
    });
  }
};
