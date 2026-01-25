import React from "react";
import Markdown from "react-markdown";
import { PuffLoader } from "react-spinners";

export default function OutputArea({ response, loading }) {
  return (
    <div className="w-full lg:w-1/2 bg-zinc-800 overflow-scroll">
      <div className="flex justify-start items-center border-b border-zinc-600 shadow-lg shrink-0">
        <h1 className="m-2 sm:px-2 py-2 sm:py-2.5 sm:mr-2 sm:text-base whitespace-nowrap text-white text-2xl! cursor-default">
          Response
        </h1>
      </div>
      <div className="w-full text-zinc-200 p-4 overflow-scroll">
        {loading ? (
          <div className="flex justify-center items-center w-full h-160">
            <PuffLoader
              color="#e0e0e0"
              cssOverride={{}}
              size={70}
              speedMultiplier={1}
            />
          </div>
        ) : (
          <Markdown>{response}</Markdown>
        )}
      </div>
    </div>
  );
}
