import { useState, useEffect } from "react";
import ScriptLine from "../components/ScriptLine";

import OSObject from "../variables/OS.var";

// What is this?
// const randomTextGenerator = () => {};

const SignupScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const [randomText, setRandomText] = useState("\u00a0"); // Invisible space so randomText evaluates to true (&nbsp;)

  const delay = async (time: number) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const generateRandomText = async () => {
    const randomOptions = '!"§$%&/()=?\u{20ac}';

    for (let j = 0; j < 100; j++) {
      let randomString = "";

      for (let i = 0; i < 2000; i++) {
        let randomChar = randomOptions.charAt(
          Math.floor(randomOptions.length * Math.random())
        );
        randomString += randomChar;
      }

      await delay(10);

      setRandomText(randomString);
    }
    setRandomText("");
  };

  return (
    <>
      <ScriptLine onFinish={() => {generateRandomText();}}>
        {OSObject.commands.execute + " ./signup.sh"}
      </ScriptLine>

      {randomText? <h2 className="text-gray-600">{randomText}</h2> : (
        <p className="text-slate-50">Form</p>
      )}
    </>
  );
};

export default SignupScreen;
