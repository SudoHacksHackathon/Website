import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const ScriptLine = ({
  children,
  onFinish,
  initialPause,
}: {
  children: JSX.Element | string;
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
              .typeString(children as unknown as string)
              .callFunction((self) => self.elements.cursor.remove())
              .pauseFor(100)
              .callFunction(onFinish)
              .start();
          }}
          options={{ cursor: "_", delay: 60 }}
        />
      </div>
    </div>
  );
};

const TerminalButton = () => {
  return <div></div>;
};

const App = () => {
  const [command, setCommand] = useState(<></>);
  const [revealed, setRevealed] = useState(false);

  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    setCommand(
      <>
        <ScriptLine onFinish={() => setRevealed(true)}>
          cat ./sudohacks2022.md
        </ScriptLine>
      </>
    );
  }, []);

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
    setRevealed(false);
    setCommand(
      <>
        <ScriptLine onFinish={() => {}}>
          <><span className="text-green-600 text-m">sudo</span> ./signup.sh</>
        </ScriptLine>
      </>
    ); // this doesn't work for some reason
    generateRandomText();
  };

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex justify-end"></div>
        <div className="flex flex-col p-5 grow">
          {command}

          {revealed ? (
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

              <div className="grid place-items-center" onClick={signUpFlow}>
                <button className="relative inline-flex mt-12 items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-screen group-hover:h-full"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative text-4xl">
                    Click here to Sign Up!
                  </span>
                </button>
              </div>
            </>
          ) : (
            <h2 className="text-gray-600">{randomText}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
