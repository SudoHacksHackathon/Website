import { useState } from "react";
import ScriptLine from "../components/ScriptLine";

import OSObject from "../variables/OS.var";

const IntroScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const [revealed, setRevealed] = useState(false);

  return (
    // add more padding b/c of button
    <div className="flex flex-col grow space-y-5 pb-3">
      <ScriptLine onFinish={() => setRevealed(true)}>
        {OSObject.commands.print + " ./sudohacks2022.md"}
      </ScriptLine>

      {/* TODO: add text-sizes and such to a theme! */}
      {revealed && (
        <>
          <h1 className="text-slate-50 lg:text-5xl md:text-4xl text-3xl">
            <span className="text-gray-600"># </span> Welcome to{" "}
            <span className="text-green-500">SudoHacks</span> 2022!
          </h1>

          <h2 className="text-slate-50 lg:text-3xl md:text-2xl text-xl">
            <span className="text-gray-600">## </span> A hackathon run by
            students, for students.
          </h2>

          <p className="text-slate-50 lg:text-lg md:text-md text-sm leading-7">
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

          <div className="flex grow place-items-center justify-center">
            <button
              className="relative inline-block md:px-10 md:py-5 px-4 py-2 font-medium group"
              onClick={nextScreen}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-slate-50 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-black border-2 border-slate-50 transition duration-400 ease-out group-hover:bg-slate-50"></span>
              <span className="relative lg:text-4xl md:text-3xl text-2xl text-slate-50 group-hover:text-black">
                Click here to Sign Up!
              </span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default IntroScreen;
