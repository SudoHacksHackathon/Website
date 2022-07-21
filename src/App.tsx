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
        <div className="rounded-t-xl w-full h-7 bg-white border-x-2 border-t-2 border-slate-700 select-none">
          <div className="flex place-items-center w-full h-full">
            <div className="flex justify-start align-items-center pl-3">
              <button onClick={() => navigate(-1)}>
                <MdArrowBackIosNew />
              </button>
            </div>

            <div className="flex-1 flex justify-center align-items-center mx-3 w-0">
              <p className="md:text-base text-sm overflow-hidden whitespace-nowrap text-ellipsis">
                {ip === undefined
                  ? "Loading..."
                  : `ssh root@${ip === null ? "127.0.0.1" : ip} (${OSData.OS})`}
              </p>
            </div>

            <div className="flex justify-end align-items-center pr-3">
              <button onClick={() => navigate(1)}>
                <MdArrowForwardIos />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 grow overflow-y-auto border-slate-700 h-full border-2 border-t-0 rounded-b-lg">
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
