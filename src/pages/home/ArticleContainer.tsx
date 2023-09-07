import React, { useEffect } from "react";
import { useArticlesDispatch } from "../../context/articles/context";
import { fetchArticles } from "../../context/articles/actions";
import { Outlet } from "react-router-dom";
import ArticlesIndex from ".";

const ArticleContainer = () => {
  const articleDispatch = useArticlesDispatch();
  useEffect(() => {
    fetchArticles(articleDispatch);
  }, [articleDispatch]);
  return <>
    <ArticlesIndex />
    <Outlet />
  </>;
};

export default ArticleContainer;
