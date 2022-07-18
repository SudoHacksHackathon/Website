import { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import Button from "../components/Button";
import getOSData from "../util/getOSData";

const EndScreen = () => {
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
            <span className="text-green-500">Thank you</span> for submitting the
            interest form!
          </h1>

          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> We will send out an email
            with more detailed information soon!
          </h2>
          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> Remember to join/follow
            our socials:
          </h2>

          <div className="w-full flex-grow p-5 px-10">
            <div className="w-full h-full flex justify-between place-items-center">
              {/* TODO: add logos */}
              <Button
                textClass="text-2xl"
                action={() => console.log("e")}
              >
                Discord
              </Button>
              <Button textClass="text-2xl" action={() => console.log("e")}>
                Slack
              </Button>
              <Button textClass="text-2xl" action={() => console.log("e")}>
                Instagram
              </Button>
              <Button textClass="text-2xl" action={() => console.log("e")}>
                Twitter
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EndScreen;
