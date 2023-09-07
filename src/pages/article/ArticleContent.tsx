import React, { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useArticleDispatch, useArticleState } from "../../context/article/context";
import { fetchArticle } from "../../context/article/actions";


const ArticleContent = () => {
  let { articleID } = useParams();
  const articleState = useArticleState();
  const articleDispatch = useArticleDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticle(articleDispatch, String(articleID));
  }, []);

  if (articleState.article === undefined && articleState.isLoading) {
    return <span>Loading...</span>;
  }
  if (articleState.isError) {
    return <span>{articleState.errorMessage}</span>;
  }

  return (
    <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10 w-full" onClose={() => navigate("/")}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {articleState.article?.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <img src={articleState.article?.thumbnail} alt="Popup Image" className="w-full" />
                    <p className="text-gray-700 mt-4">{articleState.article?.content}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  );
};

export default ArticleContent;
