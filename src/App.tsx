import axios from "axios";
import { useEffect, useState } from "react";

import IntroScreen from "./screens/IntroScreen";
import SignupScreen from "./screens/SignupScreen";

import OSObject from "./variables/OS.var";

const App = () => {
  const [screen, setScreen] = useState(0);

  const [ip, setIP] = useState("");
  const [OS, setOS] = useState("");

  const getIP = async () => {
    try {
      const res = await axios.get("https://geolocation-db.com/json/");
      setIP(res.data.IPv4);
    } catch (e) {
      setIP("");
    }
  };

  // TODO: this code pains me pls fix this
  const getOS = async () => {
    let commandStart = "";

    let printCommand = "";
    let executeCommand = "";

    if (navigator.userAgent.indexOf("Win") != -1) {
      setOS("Windows OS");
      commandStart = ">";
      printCommand = "type";
      executeCommand = "bash";
    } else {
      printCommand = "cat";
      executeCommand = "sudo";
      if (navigator.userAgent.indexOf("Mac") != -1) {
        setOS("Macintosh");
        commandStart = "$";
      } else if (navigator.userAgent.indexOf("Linux") != -1) {
        setOS("Linux OS");
        commandStart = "#";
      } else {
        setOS("Unknown OS");
        commandStart = "$";
      }
    }

    OSObject.OS = OS;
    OSObject.commandStart = commandStart;
    OSObject.commands.print = printCommand;
    OSObject.commands.execute = executeCommand;
    
    // Object.freeze(OSObject);
  };

  useEffect(() => {
    getIP();
    getOS();
  });

  const nextScreen = () => setScreen(screen + 1);

  return (
    <div className="bg-slate-900 h-full w-full flex justify-center place-items-center selection:bg-slate-50 selection:text-black">
      <div className="rounded-xl w-3/4 h-[80vh] bg-black font-mono flex flex-col">
        <div className="rounded-t-xl w-full h-7 bg-white flex place-items-center justify-center">
          <p className="md:text-base text-sm overflow-hidden mx-5 whitespace-nowrap text-ellipsis">
            ssh root@{ip || "127.0.0.1"} ({OS})
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
