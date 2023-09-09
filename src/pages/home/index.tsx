import React, { Suspense } from "react";
import Articles from "./Articles";
import ErrorBoundary from "../../components/ErrorBoundary";

const ArticlesIndex = () => {
  return (
    <div className="w-3/4 m-2 ml-4">
      <div className="flex justify-between mb-2">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700 dark:text-white">
          Trending News
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <Articles />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ArticlesIndex;
