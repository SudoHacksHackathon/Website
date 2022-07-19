import { useState } from "react";
import useIP from "./hooks/useIP";

import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";
import EndScreen from "./screens/EndScreen";

import getOSData from "./util/getOSData";

import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const ip = useIP();
  const OSData = getOSData();

  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center selection:bg-slate-200 selection:text-black">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex place-items-center justify-center">
          <div className="flex-1 flex justify-start align-items-center pl-5">
            {"<"}
          </div>
          <div className="flex-1 flex justify-center align-items-center">
            <p className="md:text-base text-sm overflow-hidden mx-5 whitespace-nowrap text-ellipsis flex">
              ssh root@{ip || "127.0.0.1"} ({OSData.OS})
            </p>
          </div>
          <div className="flex-1 flex justify-end align-items-center pr-5">
            {">"}
          </div>
        </div>
        <div className="flex flex-col p-5 grow overflow-y-auto">
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
