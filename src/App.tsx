import { useState } from "react";
import Typewriter from "typewriter-effect";

const ScriptLine = ({
  children,
  onFinish,
  initialPause,
}: {
  children: string;
  onFinish: () => void;
  initialPause?: number;
}) => {
  return (
    <div>
      <span className="text-green-600 text-m">$ </span>
      <div className="inline-block text-slate-50 text-m">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(initialPause || 0)
              .typeString(children)
              .callFunction((self) => self.elements.cursor.remove())
              .pauseFor(100)
              .callFunction(onFinish)
              .start();
          }}
          options={{ cursor: "_", delay: 75 }}
        />
      </div>
    </div>
  );
};

const TerminalButton = () => {
  return <div></div>;
};

const App = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex justify-end"></div>
        <div className="flex flex-col p-5 grow">
          <ScriptLine onFinish={() => setRevealed(true)}>
            cat ./sudohacks2022.md
          </ScriptLine>

          {revealed && (
            <>
              <h1 className="text-slate-50 text-5xl mt-5 mb-5">
                <span className="text-gray-600"># </span> Welcome to{" "}
                <span className="text-green-500">SudoHacks</span> 2022!
              </h1>

              <h2 className="text-slate-50 text-3xl mb-5">
                <span className="text-gray-600">## </span> A hackathon run by
                students, for students.
              </h2>

              <p className="text-slate-50 text-l mb-5">
                SudoHacks is an online hackathon for students (anyone under 18)
                all over the world. In four days, teams are tasked with building
                and presenting an application on{" "}
                <span className="text-green-500">Social Good</span>. There are a{" "}
                <span className="text-gray-600">**</span>
                <strong>limited number of seats available</strong>
                <span className="text-gray-600">**</span>, so sign up today to
                secure your spot!
              </p>

              <div className="grow flex justify-center place-items-center">
                <button className="bg-green-600 p-8 rounded-xl text-slate-50 text-5xl">
                  Click here to Sign Up!
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
