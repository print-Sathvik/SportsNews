import "../../App.css";
import { usePreferencesState } from "../../context/preferences/context";
import { Match as MatchType } from "../../context/matches/types";
import {
  useMatchesDispatch,
  useMatchesState,
} from "../../context/matches/context";
import Match from "./Match";
import { refreshMatches } from "../../context/matches/actions";

const Matches = () => {
  const matchesState = useMatchesState();
  const matchesDispatch = useMatchesDispatch();
  const { matches, isLoading } = matchesState;
  const preferences = usePreferencesState();
  const authToken = localStorage.getItem("authToken");

  const refreshMatch = (id: number) => {
    refreshMatches(matchesDispatch, id);
  };

  if (matches.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full mx-auto px-4">
      <div className="flex flex-shrink-0 overflow-x-scroll overflow-y-hidden scrollContainer">
        {matches
          .filter(
            (match: MatchType) =>
              match.isRunning &&
              (authToken ? preferences.sports.includes(match.sportName) : true),
          )
          .map((match: MatchType) => (
            <Match
              key={match.id}
              id={match.id}
              name={match.name}
              location={match.location}
              isRunning={match.isRunning}
              sportName={match.sportName}
              endsAt={match.endsAt}
              score={match.score}
              teams={match.teams}
              refreshMatch={() => refreshMatch(match.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default Matches;
