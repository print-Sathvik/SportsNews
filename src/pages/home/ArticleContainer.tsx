import React, { useEffect } from "react";
import { useArticlesDispatch } from "../../context/articles/context";
import { fetchArticles } from "../../context/articles/actions";
import { Outlet } from "react-router-dom";
import ArticlesIndex from ".";
import { useTeamsDispatch } from "../../context/teams/context";
import { fetchTeams } from "../../context/teams/actions";
import { usePreferencesDispatch } from "../../context/preferences/context";
import { fetchPreferences } from "../../context/preferences/actions";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";

const ArticleContainer = () => {
  const articleDispatch = useArticlesDispatch();
  const teamsDispatch = useTeamsDispatch();
  const preferencesDispatch = usePreferencesDispatch();
  const matchesDispatch = useMatchesDispatch();
  const authToken = localStorage.getItem("authToken");
  useEffect(() => {
    fetchArticles(articleDispatch);
    fetchTeams(teamsDispatch);
    fetchMatches(matchesDispatch);
    authToken && fetchPreferences(preferencesDispatch);
  }, [articleDispatch, teamsDispatch, authToken]);
  return (
    <>
      <ArticlesIndex />
      <Outlet />
    </>
  );
};

export default ArticleContainer;
