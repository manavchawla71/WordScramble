import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { words, hints } from "./data.jsx";

function App() {
  const [result, setResult] = useState(false);
  const [text, setText] = useState("");
  const [word, setDisplayWord] = useState("");
  const [hint, setDisplayHint] = useState("");
  const [originalWord, setOriginalWord] = useState("");

  const handleRefresh = () => {
    const index = Math.floor(Math.random() * words.length);

    const original = words[index];
    setOriginalWord(original);

    const scrambled = original
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    setDisplayWord(scrambled);
    setDisplayHint(hints[index]);

    setText("");
    setResult(false);
  };

  const handleCheck = () => {
    if (text.toLowerCase() === originalWord.toLowerCase()) {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col justify-center items-center px-4">
        <h1
          className="text-white text-center font-bold text-4xl mb-8 underline"
          style={{ textDecorationStyle: "dashed" }}
        >
          Word Scramble Game
        </h1>
        <p id="randomwords" className="text-white text-xl mb-4">
          {word}
        </p>
        <p id="hint" className="text-white text-md italic mb-4">
          {hint}
        </p>
        <input
          className="text-center mb-6 p-3 rounded-lg shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          type="text"
          placeholder="Guess the Correct Word"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1 className="text-white text-2xl mb-8">
          Result: {result ? "Correct" : "Incorrect"}
        </h1>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-lg transition-all duration-300"
            onClick={handleCheck}
          >
            Check
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg shadow-lg transition-all duration-300"
            onClick={handleRefresh}
          >
            Refresh
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
