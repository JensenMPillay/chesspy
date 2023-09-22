import React from "react";

function Input({
  name,
  className,
  children,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement>): React.JSX.Element {
  return (
    <div
      className={`bg-darker my-1 flex rounded-xl border border-neutral-800 text-base text-white shadow transition-all duration-300 hover:border-neutral-700 focus:border-neutral-700 md:my-2 lg:my-4 xl:my-8 ${className}`}
    >
      {children}
      <input
        {...inputProps}
        type="text"
        name={name}
        className="w-full border-neutral-800 bg-neutral-800 py-4 pr-8 text-base text-white caret-neutral-700 md:pr-12 lg:pr-16 xl:pr-20"
        placeholder={name && name.charAt(0).toUpperCase() + name.slice(1)}
      />
    </div>
  );
}

export default Input;
