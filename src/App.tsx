import { useEffect, useState } from "react";
import ScriptLine from "./components/ScriptLine";
import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";

const TerminalButton = () => {
  return <div></div>;
};

const App = () => {
  const [randomText, setRandomText] = useState("");

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

    for (let l = 0; l < 4; l++) {
      const dots = [".", "..", "..."];
      for (let k = 0; k < dots.length; k++) {
        setRandomText(
          `Operation complete. Opening sign up form for user${dots[k]}`
        );
        await delay(200);
      }
    }
    await delay(500);

    setRandomText("");
  };

  const signUpFlow = async () => {
    //setRevealed(false);
    /*setCommand(
      <>
        <ScriptLine onFinish={() => {}}>
          <><span className="text-green-600 text-m">sudo</span> ./signup.sh</>
        </ScriptLine>
      </>
    ); // this doesn't work for some reason
    generateRandomText();*/
  };

  const [screen, setScreen] = useState(0);

  const nextScreen = () => setScreen(screen + 1);

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex justify-end"></div>
        <div className="flex flex-col p-5 grow">
          {screen === 0 && <IntroScreen nextScreen={nextScreen} />}
          {screen === 1 && <SignupScreen nextScreen={nextScreen} />}
        </div>
      </div>
    </div>
  );
};

export default App;
