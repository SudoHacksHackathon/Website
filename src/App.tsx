import { useState } from "react";
import Typewriter from "typewriter-effect";

const TerminalButton = () => {
  return <div></div>;
};

const App = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono">
        <div className="w-full h-7 bg-white flex justify-end"></div>
        <div className="p-5">
          <span className="text-green-600 text-m">$ </span>
          <div className="inline-block text-slate-50 text-m mb-5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("cat ./sudohacks2022.md")
                  .pauseFor(500)
                  .callFunction((self) => {
                    self.elements.cursor.remove();
                    setRevealed(true);
                  })
                  .start();
              }}
              options={{ cursor: "_", delay: 75 }}
            />
          </div>
          <h1 className="text-slate-50 text-5xl mb-5" hidden={!revealed}>
            <span className="text-gray-600"># </span> Welcome to SudoHacks
            2022!
          </h1>
          <h2 className="text-slate-50 text-3xl mb-5" hidden={!revealed}>
            <span className="text-gray-600">## </span> A hackathon run by
            students, for students.
          </h2>
          <p className="text-slate-50 text-l" hidden={!revealed}>
            SudoHacks is an online hackathon for students (anyone under 18) all
            over the world. In four days, participants are tasked with building
            and presenting an application concerning social good. There are a{" "}
            <span className="text-gray-600">**</span>
            <strong>limited number of seats available</strong>
            <span className="text-gray-600">**</span>, so sign up today to
            secure your spot!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
