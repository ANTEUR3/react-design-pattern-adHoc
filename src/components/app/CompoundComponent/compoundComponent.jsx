import React from "react";
import BadComponent from "./badComponent";
import GoodComponent from "./goodComponent";
import Inputs from "./inputs";
import Selects from "./selects";

const CompoundComponent = () => {
  return (
    <div className=" w-full ">
      <h1 className="text-8xl font-bold tracking-tight text-foreground">
        Compound Component
      </h1>
      <div className="flex justify-between py-[60px]">
        <BadComponent />
        <GoodComponent>
          <Inputs/>
          <Selects/>
        </GoodComponent>
      </div>
    </div>
  );
};

export default CompoundComponent;
