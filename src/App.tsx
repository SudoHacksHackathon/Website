import { useState } from "react";
import useIP from "./hooks/useIP";

import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";
import ThankyouScreen from "./screens/ThankyouScreen"

import getOSData from "./util/getOSData";

import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  const ip = useIP();
  const OSData = getOSData();

  const navigate = useNavigate();

  const [screen, setScreen] = useState(0);
  const nextScreen = () => setScreen(screen + 1);

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center selection:bg-slate-50 selection:text-black">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex place-items-center justify-center">
          <p className="md:text-base text-sm overflow-hidden mx-5 whitespace-nowrap text-ellipsis">
            ssh root@{ip || "127.0.0.1"} ({OSData.OS})
          </p>
        </div>
        <div className="flex flex-col p-5 grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<IntroScreen nextScreen={() => {navigate("/reserve")}} />}/>
            <Route path="/reserve" element={<SignupScreen nextScreen={() => {navigate("/thankyou")}} />}/>
            <Route path="/thankyou" element={<ThankyouScreen />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
