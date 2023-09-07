import React from "react";
import { Article as ArticleType } from "../../context/articles/reducer";
import { Link } from "react-router-dom";

const Article = (props: ArticleType) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={props.thumbnail}
        alt={props.title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{props.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {new Date(props.date).toUTCString()}
        </p>
        <p className="text-gray-700">{props.description}</p>
        <Link
          to={`/article/${props.id}`}
          className="text-blue-500 hover:underline mt-2 block"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Article;
