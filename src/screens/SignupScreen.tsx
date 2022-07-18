import axios from "axios";
import { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import Button from "../components/Button";

import generateRandomText from "../util/generateRandomText";
import delay from "../util/delay";
import getOSData from "../util/getOSData";

import { useNavigate } from "react-router-dom";

const SignupScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  const OSData = getOSData();

  const [randomText, setRandomText] = useState("\u00a0"); // Invisible space so randomText evaluates to true (&nbsp;)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const loadForm = async () => {
    for (let j = 0; j < 100; j++) {
      setRandomText(generateRandomText());
      await delay(10);
    }

    setRandomText("");
  };

  const onSubmit = async () => {
    await axios.post(
      "https://nocodeform.io/f/62d1bea391801df0ffe3ae7d",
      {
        name: name,
        email: email,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    nextScreen();
  };

  return (
    <div
      className={
        randomText ? "overflow-y-hidden" : "flex flex-col grow space-y-5"
      }
    >
      <ScriptLine
        onFinish={() => {
          loadForm();
        }}
      >
        {OSData.commands.execute + " ./signup.sh"}
      </ScriptLine>

      {randomText ? (
        <h2 className="text-gray-600 break-words">{randomText}</h2>
      ) : (
        <>
          <iframe
            name="dummyframe"
            id="dummyframe"
            style={{ display: "none" }}
          ></iframe>
          {/* empty frame to stop redirection */}

          <form className="w-5/6" target="dummyframe">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your full name
              </label>
              <input
                type="text"
                id="name"
                className="border text-sm block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-50"
                placeholder="John Doe"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Your email
              </label>
              <input
                type="text"
                id="email"
                className="border text-sm block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-50"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Messages or questions
              </label>
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-slate-50"
                placeholder="Leave a message or question..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>

            <Button textClass="text-md" action={onSubmit}>
              Submit!
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default SignupScreen;
