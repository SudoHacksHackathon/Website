import Typewriter from "typewriter-effect";

const ScriptLine = ({
  children,
  onFinish,
  initialPause,
}: {
  children: string;
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