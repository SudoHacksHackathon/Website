import React, { useState } from "react";

import ScriptLine from "../components/ScriptLine";
import Button from "../components/Button";
import getOSData from "../util/getOSData";

import DiscordIcon from "../icons/DiscordIcon";
import SlackIcon from "../icons/SlackIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import useTitle from "../hooks/useTitle";

const SocialButton = ({
  icon,
  text,
  action,
}: {
  icon: ({ className }: { className: string }) => JSX.Element;
  text: string;
  action: () => void;
}) => (
  <div className="m-5">
    <Button textClass="md:text-2xl text-xl" action={action}>
      {React.createElement(icon, { className: "md:w-8 md:h-8 w-6 h-6" })}{" "}
      <p className="inline-block align-middle">{text}</p>
    </Button>
  </div>
);

const EndScreen = () => {
  useTitle("Thanks | SudoHacks");

  const OSData = getOSData();
  const [revealed, setRevealed] = useState(false);

  return (
    // add more padding b/c of button
    <div className="flex flex-col grow space-y-5 pb-3">
      <ScriptLine onFinish={() => setRevealed(true)}>
        {OSData.commands.print + " ./thankyou.md"}
      </ScriptLine>

      {/* TODO: add text-sizes and such to a theme! */}
      {revealed && (
        <>
          <h1 className="text-slate-50 lg:text-5xl md:text-4xl text-3xl pb-4">
            <span className="text-gray-600"># </span>
            <span className="text-green-500">Thank you!</span>
          </h1>

          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> We will send out an email
            with more detailed information soon!
          </h2>
          <h2 className="text-slate-50 lg:text-2xl md:text-xl text-xl">
            <span className="text-gray-600">## </span> Remember to join/follow
            our socials to recieve instant updates:
          </h2>

          <div className="w-full flex-grow p-5 lg:px-10 px-2">
            <div className="w-full h-full flex flex-wrap justify-center place-items-center">
              <SocialButton
                icon={DiscordIcon}
                text="Discord"
                action={() =>
                  window.open("https://discord.gg/fKukUkG57H", "_blank")
                }
              />
              <SocialButton
                icon={SlackIcon}
                text="Slack"
                action={() =>
                  window.open(
                    "https://join.slack.com/t/sudohacksworkspace/shared_invite/zt-1d4y7xehh-kZTxFuk~Bhad76oSpI_bng",
                    "_blank"
                  )
                }
              />
              <SocialButton
                icon={InstagramIcon}
                text="Instagram"
                action={() => window.open("https://www.instagram.com/sudo_hacks/", "_blank")}
              />
              <SocialButton
                icon={TwitterIcon}
                text="Twitter"
                action={() =>
                  window.open("https://twitter.com/sudo_hacks", "_blank")
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EndScreen;
