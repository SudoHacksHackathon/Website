import React from "react";

const Button = ({
  children,
  textClass,
  action
}: {
  children: string;
  textClass: string;
  action: () => void;
}) => {
  return (
    <button
      className="relative inline-block md:px-10 md:py-5 px-4 py-2 font-medium group"
      onClick={action}
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-slate-50 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-black border-2 border-slate-50 transition duration-400 ease-out group-hover:bg-slate-50"></span>
      <span className={`relative ${textClass} text-slate-50 group-hover:text-black`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
