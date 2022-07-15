import { useState } from "react";
import ScriptLine from "../components/ScriptLine";

import OSObject from "../variables/OS.var";

const IntroScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <ScriptLine onFinish={() => setRevealed(true)}>
        {OSObject.commands.print + " ./sudohacks2022.md"}
      </ScriptLine>

      {revealed && (
        <div>
          <h1 className="text-slate-50 text-5xl mt-5 mb-5">
            <span className="text-gray-600"># </span> Welcome to{" "}
            <span className="text-green-500">SudoHacks</span> 2022!
          </h1>

          <h2 className="text-slate-50 text-3xl mb-5">
            <span className="text-gray-600">## </span> A hackathon run by
            students, for students.
          </h2>

          <p className="text-slate-50 text-l mb-5 leading-7">
            SudoHacks is an online hackathon for students (anyone under 18) all
            over the world. In four days, teams are tasked with building and
            presenting an application on{" "}
            <span className="text-green-500">Social Good</span>. There are a{" "}
            <span className="text-gray-600">**</span>
            <strong className="text-black bg-slate-50 font-bold">
              limited number of seats available
            </strong>
            <span className="text-gray-600">**</span>, so sign up today to
            secure your spot!
          </p>

          <div
            className="flex h-2/4 l items-center justify-center grow"
            onClick={nextScreen}
          >
            <button
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-slate-50 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-black border-2 border-slate-50 transition duration-400 ease-out group-hover:bg-slate-50"></span>
              <span className="relative text-4xl text-slate-50 group-hover:text-black">
              Click here to Sign Up!
              </span>
            </button>
            {/* Old button */}
            {/* <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-screen group-hover:h-full"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative text-4xl">Click here to Sign Up!</span>
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default IntroScreen;
