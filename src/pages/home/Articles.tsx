import { useArticlesState } from "../../context/articles/context";
import Article from "./Article";
import { Article as ArticleType, Sport } from "../../context/articles/types";
import { useEffect, useState } from "react";
import { fetchSports } from "../../context/articles/actions";

const Articles = () => {
  let articlesState = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = articlesState;
  const [sports, setSports] = useState<Sport[]>(() => []);
  const [selectedSport, setSelectedSport] = useState("");

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
    <div className="w-full mx-auto h-screen flex flex-col px-4">
      <div className="bg-gray-200 p-4 flex space-x-5 whitespace-nowrap overflow-x-hidden overflow-y-hidden">
        <p
          onClick={() => setSelectedSport("")}
          className="font-semibold hover:underline cursor-pointer"
        >
          All
        </p>
        {sports.map((sport) => (
          <p
            onClick={() => setSelectedSport(sport.name)}
            className={
              sport.name === selectedSport
                ? "font-semibold hover:underline cursor-pointer border-b-black border-b-4"
                : "font-semibold hover:underline cursor-pointer dark:text-slate-300"
            }
          >
            {sport.name}
          </p>
        ))}
      </div>
      <div className="bg-gray-200">
        {articlesState.articles
          .filter(
            (article) =>
              selectedSport === "" || article.sport.name === selectedSport,
          )
          .map((article: ArticleType) => (
            <Article
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
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
export default Articles;
