import React, { PropsWithChildren } from "react";

function Container({
  className,
  children,
}: PropsWithChildren<ContainerPropsType>): React.JSX.Element {
  return (
    <section
      className={`mb-10 mt-2 flex flex-col items-center justify-center rounded-xl bg-neutral-800 p-2 md:p-4 lg:p-6 xl:p-8 ${className}`}
    >
      {children}
    </section>
  );
}

export default Container;
