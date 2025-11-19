import React from "react";
import BadComponent from "./badComponent";
import GoodComponent from "./goodComponent";
import Inputs from "./inputs";
import Selects from "./selects";
import Checkboxes from "./checkboxes";
import TextArea from "./textArea";
const CompoundComponent = () => {
  return (
    <div className=" w-full flex flex-col items-center px-20  ">
      
      <h1 className="text-8xl font-bold tracking-tight text-foreground">
        Compound Component
      </h1>
      <div className="flex justify-between py-[60px] w-full">
        <BadComponent />
        <GoodComponent>
          <Inputs/>
          <Selects/>
          {/* <TextArea/>
          <Checkboxes/> */}
        </GoodComponent>
      </div>
    </div>
  );
};

export default CompoundComponent;
