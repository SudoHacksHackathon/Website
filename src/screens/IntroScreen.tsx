import { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import Button from "../components/Button";
import getOSData from "../util/getOSData";

const IntroScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const OSData = getOSData();
  const [revealed, setRevealed] = useState(false);

  return (
    // add more padding b/c of button
    <div className="flex flex-col grow space-y-5 pb-3">
      <ScriptLine onFinish={() => setRevealed(true)}>
        {OSData.commands.print + " ./sudohacks2022.md"}
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

          <div className="flex flex-col lg:space-y-14 md:space-y-10 space-y-7 grow place-items-center justify-center">
            <h1 className="text-slate-50 lg:text-5xl md:text-4xl text-3xl text-center">
              Date: <span className="text-green-500">TBD</span>
              <br />
              <span className="lg:text-lg md:text-md text-sm">
                An email will be sent out when the date has been decided.
              </span>
            </h1>
            <Button
              textClass="lg:text-4xl md:text-3xl text-2xl"
              action={nextScreen}
            >
              Click here to reserve your spot!
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default IntroScreen;
