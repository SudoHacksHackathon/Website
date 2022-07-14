import { useState } from "react";
import Typewriter from "typewriter-effect";

const TerminalButton = () => {
  return <div></div>;
};

const App = () => {
  const [revealed, setRevealed] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-slate-900 grid h-screen place-items-center">
      <div className="rounded-b-xl w-3/4 h-[80vh] bg-black font-mono">
        <div className="rounded-t-xl w-full h-7 bg-white flex justify-end"></div>
        <div className="p-5 leading-[3rem]">
          {!revealed && (
            <>
              <span className="text-green-600 text-m">$ </span>
              <div className="inline-block text-slate-50 text-m">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("cat ./sudohacks2022.md")
                      .pauseFor(1000)
                      .callFunction(() => setRevealed(true))
                      .start();
                  }}
                  options={{ cursor: "_", delay: 60 }} // Delay of 60 milliseconds
                />
              </div>
            </>
          )}
          {revealed && (
            <>
              <h1 className="text-slate-50 text-5xl">
                Welcome to SudoHacks 2022!
              </h1>

              <p className="text-slate-50 text-m mb-2">
                Welcome to SudoHacks! Run by students, for students.
              </p>

              <p className="text-slate-50 text-l">
                SudoHacks is an online hackathon for students (anyone under 18)
                all over the world. <br />
                In four days, participants are tasked with building and
                presenting an application concerning social good. <br />
                There are a <strong>limited number of seats available</strong>,
                so sign up today to secure your spot!
              </p>

              <div className="grid place-items-center mt-10">
                <button className="delay-50 transition duration-300 ease-in-out rounded-lg border bg-slate-50 text-black px-6 py-2 hover:text-slate-50 hover:bg-black">
                  Reserve your spot
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
