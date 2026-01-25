import CodeArea from "./Components/CodeArea";
import OutputArea from "./Components/OutputArea";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import { languages } from "./Components/constants/Languages";
import { URL, API_KEY } from "./Components/constants/constants";

export default function App() {
  const [code, setCode] = useState(languages[0].helloWorld);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResponse = async () => {
    setLoading(true);
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemma-3-4b-it:free",
        messages: [
          {
            role: "user",
            content: `You are an expert-level software developer, skilled in writing efficient, clean, and advanced code.
I'm sharing a piece of code written in ${activeLang.key}.
Your job is to deeply review this code and provide the following:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ Detailed suggestions for improvement, including best practices and advanced alternatives.
3️⃣ A clear explanation of what the code does, step by step.
4️⃣ A list of any potential bugs or logical errors, if found.
5️⃣ Identification of syntax errors or runtime errors, if present.
6️⃣ Solutions and recommendations on how to fix each identified issue.

Analyze it like a senior developer reviewing a pull request.

Code: ${code}`,
          },
        ],
      }),
    });
    const data = await res.json();
    const responseData = data.choices[0].message.content;
    setResponse(responseData);
    console.log(responseData);
    setLoading(false);
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-3.5rem)] max-w-full overflow-hidden">
        <CodeArea
          code={code}
          setCode={setCode}
          handleResponse={handleResponse}
          activeLang={activeLang}
          setActiveLang={setActiveLang}
        />
        <OutputArea response={response} />
      </div>
    </>
  );
}
