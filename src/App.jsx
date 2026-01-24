import CodeArea from "./Components/CodeArea";
import OutputArea from "./Components/OutputArea";
import NavBar from "./Components/NavBar";
import React, { useState } from "react";
import { languages } from "./Components/constants/Languages";
import { URL, API_KEY } from "./Components/constants/constants";

export default function App() {
  const [code, setCode] = useState(languages[0].helloWorld);

  const handleResponse = async () => {
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
            content: "hello",
          },
        ],
      }),
    });
    const data = await res.json();
    const Response = data.choices[0].message.content;
    console.log(Response);
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-col lg:flex-row h-[calc(100vh-3.5rem)] max-w-full overflow-hidden">
        <CodeArea
          code={code}
          setCode={setCode}
          handleResponse={handleResponse}
        />
        <OutputArea />
      </div>
    </>
  );
}
