import { useState } from "react";
import useIP from "./hooks/useIP";

import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";
import EndScreen from "./screens/EndScreen";

import getOSData from "./util/getOSData";

import { Routes, Route, useNavigate } from "react-router-dom";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const App = () => {
  const ip = useIP();
  const OSData = getOSData();

  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center selection:bg-slate-200 selection:text-black p-3">
      <div className="rounded-xl w-[min(100%,_75rem)] h-[min(100%,_42.1875rem)] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex place-items-center justify-center">
          <div className="flex-1 flex justify-start align-items-center pl-5">
            <button onClick={() => navigate(-1)}>
              <MdArrowBackIosNew />
            </button>
          </div>

          <div className="flex-1 flex justify-center align-items-center">
            <p className="md:text-base text-sm overflow-hidden mx-5 whitespace-nowrap text-ellipsis flex">
              ssh root@{ip || "127.0.0.1"} ({OSData.OS})
            </p>
          </div>
          
          <div className="flex-1 flex justify-end align-items-center pr-5">
            <button onClick={() => navigate(1)}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="flex flex-col p-5 grow overflow-y-auto border-slate-700 border-2 rounded-b-lg">
          <Routes>
            <Route
              path="/"
              element={
                <IntroScreen
                  nextScreen={() => {
                    navigate("/reserve");
                  }}
                />
              }
            />
            <Route
              path="/reserve"
              element={
                <SignupScreen
                  nextScreen={() => {
                    navigate("/submitted");
                  }}
                />
              }
            />
            <Route path="/submitted" element={<EndScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
