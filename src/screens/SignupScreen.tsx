import { useEffect } from "react";
import ScriptLine from "../components/ScriptLine";

const randomTextGenerator = () => {};

const SignupScreen = ({ nextScreen }: { nextScreen: () => void }) => {
  useEffect(() => console.log("hi!"));

  return (
    <>
      <ScriptLine onFinish={() => {}}>
        sudo ./signup.sh
      </ScriptLine>
    </>
  );
};

export default SignupScreen;
