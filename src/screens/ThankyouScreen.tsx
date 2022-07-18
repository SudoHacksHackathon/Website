import { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import Button from "../components/Button";
import getOSData from "../util/getOSData";

const ThankyouScreen = () => {
  const OSData = getOSData();
  const [revealed, setRevealed] = useState(false);

  return (
    // add more padding b/c of button
    <div className="flex flex-col grow space-y-5 pb-3">
      <ScriptLine onFinish={() => setRevealed(true)}>
        {OSData.commands.print + " ./thankyou.md"}
      </ScriptLine>

      {/* TODO: add text-sizes and such to a theme! */}
      {revealed && (
        <>
          <h1 className="text-slate-50 lg:text-5xl md:text-4xl text-3xl">
            <span className="text-gray-600"># </span>
            <span className="text-green-500">Thank you!</span>
          </h1>

          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> We will send out an email
            with more detailed information soon!
          </h2>
          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> Remember to join/follow
            our socials:
          </h2>

          <div className="flex justify-between w-9/12 p-5">
            <Button textClass="text-md" action={() => console.log("e")}>
              Discord
            </Button>
            <Button textClass="text-md" action={() => console.log("e")}>
              Slack
            </Button>
            <Button textClass="text-md" action={() => console.log("e")}>
              Instagram
            </Button>
            <Button textClass="text-md" action={() => console.log("e")}>
              Twitter
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ThankyouScreen;
