import React from "react";

const Container = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="h-screen flex flex-col px-4 py-8 md:px-32 md:py-24 bg-white w-screen md:h-auto"
    >
      {props.children}
    </div>
  );
};

export default Container;
