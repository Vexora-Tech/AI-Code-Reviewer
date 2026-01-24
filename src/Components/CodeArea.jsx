import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Button from "./Button";
import { languages } from "./constants/Languages";

export default function CodeArea({ code, setCode, handleResponse }) {
  const [file, setFile] = useState("main.js");
  const [activeLang, setActiveLang] = useState(languages[0]);

  return (
    <div className="flex w-full lg:w-1/2 bg-zinc-900 h-full border-r-4">
      <div className="bg-[#1e1e1e] p-2 overflow-auto w-24 sm:w-12 md:w-20 lg:w-20 shrink-0 pt-1">
        <Button
          file={file}
          setFile={setFile}
          activeLang={activeLang}
          setActiveLang={setActiveLang}
          setCode={setCode}
        />
      </div>
      <div className="flex-1 min-w-0 flex flex-col h-full overflow-hidden">
        <div className="bg-linear-to-r from-zinc-800 to-zinc-700 flex justify-between items-center border-b border-zinc-600 shadow-lg shrink-0">
          <div
            className={`text-base sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6 py-3 sm:py-4 truncate font-medium ${
              activeLang ? "text-white" : "text-zinc-400"
            }`}
          >
            <span className="inline-flex items-center gap-2 cursor-default">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              {file}
            </span>
          </div>
          <button
            className="bg-linear-to-r from-zinc-400 to-zinc-500 hover:from-zinc-500 hover:to-zinc-600 m-2 px-4 sm:px-6 py-2 sm:py-2.5 border border-zinc-700 rounded-lg font-semibold mr-2 sm:mr-4 text-sm sm:text-base whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 shrink-0"
            onClick={handleResponse}
          >
            Review
          </button>
        </div>
        <div className="flex-1 border-l-2 border-zinc-700 bg-[#1e1e1e] min-h-0">
          <Editor
            height="100%"
            theme="vs-dark"
            language={activeLang.key}
            value={code}
            onChange={(value) => setCode(value)}
            options={{
              fontSize: 16,
              fontFamily:
                "'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', monospace",
              fontLigatures: true,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: "on",
              lineNumbers: "on",
              tabSize: 2,
              autoClosingBrackets: "always",
              autoClosingQuotes: "always",
              bracketPairColorization: { enabled: true },
              smoothScrolling: true,
              cursorBlinking: "smooth",
              cursorSmoothCaretAnimation: "on",
              formatOnPaste: true,
              formatOnType: true,
              suggestOnTriggerCharacters: true,
              quickSuggestions: true,
              padding: { top: 16, bottom: 16 },
              scrollbar: {
                vertical: "visible",
                horizontal: "visible",
                verticalScrollbarSize: 12,
                horizontalScrollbarSize: 12,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
