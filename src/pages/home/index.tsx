import React, { Suspense } from "react";
import Articles from "./Articles";
import ErrorBoundary from "../../components/ErrorBoundary";
import Matches from "./Matches";
import Favourites from "./Favourites";

const ArticlesIndex = () => {
  return (
    <div>
      <div className="ml-4 mr-2">
        <div className="flex justify-between mb-2">
          <h2 className="text-2xl font-medium tracking-tight text-slate-700 dark:text-white">
            Live Sports
          </h2>
        </div>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <Matches />
          </Suspense>
        </ErrorBoundary>
      </div>
      <div className="flex">
        <div className="w-3/4 m-2 ml-4">
          <div className="flex justify-between mb-2">
            <h2 className="text-2xl font-medium tracking-tight text-slate-700 dark:text-white">
              Trending News
            </h2>
          </div>
          <ErrorBoundary>
            <Suspense
              fallback={<div className="suspense-loading">Loading...</div>}
            >
              <Articles />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className="w-1/4 m-2 ml-4">
          <div className="flex justify-between mb-2">
            <h2 className="text-2xl font-medium tracking-tight text-slate-700 dark:text-white">
              Favourites
            </h2>
          </div>
          <ErrorBoundary>
            <Suspense
              fallback={<div className="suspense-loading">Loading...</div>}
            >
              <Favourites />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default ArticlesIndex;
