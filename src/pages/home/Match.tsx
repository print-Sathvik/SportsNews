import React from "react";
import { Match as MatchType } from "../../context/matches/types";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Match = (props: MatchType) => {
  return (
    <div className="min-w-[48] bg-white shadow-lg rounded-lg overflow-hidden m-4 dark:bg-black flex flex-shrink-0">
      <div className="p-4">
        <h2 className="text-xl font-semibold">
          {props.sportName}
          <button className="float-right" onClick={props.refreshMatch}>
            <ArrowPathIcon className="w-5 h-5" />
          </button>
        </h2>
        <p className="text-sm mb-2">{props.name}</p>
        {props.score &&
          Object.keys(props.score).map((teamName) => (
            <p>
              {teamName}
              <span className="float-right">
                {props.score && props.score[teamName]}
              </span>
            </p>
          ))}
      </div>
    </div>
  );
};

export default Match;
