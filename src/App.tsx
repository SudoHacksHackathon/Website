import { useState } from "react";
import useIP from "./hooks/useIP";

import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";
import getOSData from "./util/getOSData";

const App = () => {
  const ip = useIP();
  const OSData = getOSData();

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
          {screen === 0 && <IntroScreen nextScreen={nextScreen} />}
          {screen === 1 && <SignupScreen nextScreen={nextScreen} />}
        </div>
      </div>
    </div>
  );
};

export default App;
