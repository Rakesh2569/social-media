import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./Saraswati.css";

function Saraswati() {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [generatingAnswer, setGeneratingAnswer] = useState<boolean>(false);

  async function generateAnswer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setGeneratingAnswer(true);
    setAnswer("Loading your answer... \n It might take up to 10 seconds");

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCLQ8UWJGve6HRm3u4kMieW1hm69-epQPY",
        {
          contents: [{ parts: [{ text: question }] }],
        }
      );

      setAnswer(response.data.candidates[0].content.parts[0].text as string);
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="bdy">
        <form
          onSubmit={generateAnswer}
          className="topp"
        >
          <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank">
            <h1>Saraswati AI</h1>
            <p className="text-xs">Welcome Back Aspirant</p>
          </a>
          <textarea
            required
            className="border rounded w-11/12 my-2 min-h-fit p-3"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <div className="response">
          <ReactMarkdown className="p-3">{answer}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}

export default Saraswati;
