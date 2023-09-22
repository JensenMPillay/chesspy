import React from "react";

function Button({
  name,
  className,
  children,
  ...buttonProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  return (
    <div
      className={`group relative my-1 rounded-xl text-center text-base text-white shadow md:my-2 lg:my-4 xl:my-8 ${className}`}
    >
      <button
        {...buttonProps}
        className="relative z-10 flex w-full flex-row items-center justify-center rounded-xl bg-primary py-4 text-center text-base font-bold capitalize text-white shadow md:text-lg lg:text-xl xl:text-2xl"
      >
        {children}
        {name}
        <span className="absolute left-0 top-0 h-full w-full bg-white opacity-0 mix-blend-screen blur-md filter transition-all duration-300 group-hover:opacity-10"></span>
      </button>
      <div className=" absolute top-1 h-[102%] w-full rounded-xl bg-primaryDark" />
    </div>
  );
}

export default Button;
