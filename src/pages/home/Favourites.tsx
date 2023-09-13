import { useArticlesState } from "../../context/articles/context";
import Article from "./Article";
import { Article as ArticleType, Sport } from "../../context/articles/types";
import { useEffect, useState } from "react";
import { fetchSports } from "../../context/articles/actions";
import "../../App.css";
import { usePreferencesState } from "../../context/preferences/context";
import Favourite from "./Favourite";
import { useTeamsState } from "../../context/teams/context";

const Favourites = () => {
  let articlesState = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = articlesState;
  const [sports, setSports] = useState<Sport[]>([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");
  const teams = useTeamsState();
  const preferences = usePreferencesState();
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    fetchSports(setSports);
  }, []);

  if (articles.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div className="w-full mx-auto h-screen flex flex-col px-4 bg-gray-200">
      <select
        className="w-full h-fit p-2 mt-2 rounded"
        onChange={(e) => setSelectedSport(e.target.value)}
      >
        {sports
          .filter((sport) =>
            authToken ? preferences.sports.includes(sport.name) : true,
          )
          .map((sport) => (
            <option value={sport.name}>{sport.name}</option>
          ))}
      </select>
      <select
        className="w-full h-fit p-2 mt-2 rounded"
        onChange={(e) => setSelectedTeam(e.target.value)}
      >
        {teams
          .filter((team) =>
            authToken ? preferences.teams.includes(team.name) : true,
          )
          .map((team) => (
            <option value={team.name}>{team.name}</option>
          ))}
      </select>
      <div className="bg-gray-200">
        {articlesState.articles
          .filter(
            (article) =>
              selectedSport === "" || article.sport.name === selectedSport,
          )
          .filter(
            (article) =>
              selectedTeam === "" ||
              article.teams.map((team) => team.name).includes(selectedTeam),
          )
          .map((article: ArticleType) => (
            <Favourite
              key={article.id}
              id={article.id}
              title={article.title}
              summary={article.summary}
              thumbnail={article.thumbnail}
              sport={article.sport}
              date={article.date}
              content={article.content}
              teams={[]}
            />
          ))}
      </div>
    </div>
  );
};
export default Favourites;
