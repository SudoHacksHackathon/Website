import { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import generateRandomText from "../util/generateRandomText";
import delay from "../util/delay";

import OSObject from "../variables/OS.var";

const SignupScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const [randomText, setRandomText] = useState("\u00a0"); // Invisible space so randomText evaluates to true (&nbsp;)

  const loadForm = async () => {
    for (let j = 0; j < 100; j++) {
      setRandomText(generateRandomText());
      await delay(10);
    }

    setRandomText("");
  };

  return (
    <div className={randomText ? "overflow-y-hidden" : "flex flex-col grow space-y-5"}>
      <ScriptLine
        onFinish={() => {
          loadForm();
        }}
      >
        {OSObject.commands.execute + " ./signup.sh"}
      </ScriptLine>

      {randomText ? (
        <h2 className="text-gray-600 break-words">{randomText}</h2>
      ) : (
        <p className="text-slate-50">Form loaded!</p>
      )}
    </div>
  );
};

export default SignupScreen;
