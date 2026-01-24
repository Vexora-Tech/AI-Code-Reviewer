import React from "react";

export default function InputArea() {
  return (
    <div className="w-full lg:w-1/2 bg-zinc-800">
      <div className="flex justify-start items-center border-b border-zinc-600 shadow-lg shrink-0">
        <h1 className="m-2 sm:px-2 py-2 sm:py-2.5 sm:mr-2 sm:text-base whitespace-nowrap text-white text-2xl! cursor-default">
          Response
        </h1>
      </div>
      <div className="w-full h-screen text-xl text-zinc-200 p-2">Hello World</div>
    </div>
  );
}
