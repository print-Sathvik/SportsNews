import React, { Suspense } from "react";
import Articles from "./Articles";
import ErrorBoundary from "../../components/ErrorBoundary";

const ArticlesIndex = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Trending News
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <Articles />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};


export default ArticlesIndex;