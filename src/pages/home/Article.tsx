import React from "react";
import { Article as ArticleType } from "../../context/articles/types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Article = (props: ArticleType) => {
  const { t, i18n } = useTranslation()
  const dateFormatter = new Intl.DateTimeFormat(i18n.language, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 dark:bg-black">
      <img
        src={props.thumbnail}
        alt={props.title}
        className="w-56 h-48 m-2 float-right"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {dateFormatter.format(new Date(props.date))}
        </p>
        <p className="text-gray-700">{props.summary}</p>
        <Link
          to={`/article/${props.id}`}
          className="text-blue-500 hover:underline mt-2 block"
        >
          {t('readMore')}
        </Link>
      </div>
    </div>
  );
};

export default Article;
