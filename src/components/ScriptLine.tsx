import Typewriter from "typewriter-effect";

import getOSData from "../util/getOSData";

const ScriptLine = ({
  children,
  onFinish,
  initialPause,
}: {
  children: string;
  onFinish: () => void;
  initialPause?: number;
}) => {
  const OSData = getOSData();

  return (
    <div>
      <span className="text-green-600 text-m">{OSData.commandStart} </span>
      <div className="inline text-slate-50 md:text-base text-sm">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(initialPause || 0)
              .typeString(children)
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

export default ScriptLine;
