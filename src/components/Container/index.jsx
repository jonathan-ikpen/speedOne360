import React from "react";

const Container = ({ children }) => {
  return (
    <div className="pt-40 ss:pt-[120px] relative mx-auto w-full h-fit px-5 max-w-7xl ">
      {children}
    </div>
  );
};

export default Container;
