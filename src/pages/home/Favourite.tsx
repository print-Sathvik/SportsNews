import React from "react";
import { Article as ArticleType } from "../../context/articles/types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Favourite = (props: ArticleType) => {
  const {t} = useTranslation()
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-2 dark:bg-black">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-gray-700">{props.summary}</p>
        <Link
          to={`/article/${props.id}`}
          className="text-blue-500 hover:underline mt-2 block"
        >
          {t("readMore")}
        </Link>
      </div>
    </div>
  );
};

export default Favourite;
