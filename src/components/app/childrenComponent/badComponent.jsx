
import { MdGppBad } from "react-icons/md";
import { Button } from "../../ui/button";
import { useState } from "react";
import { ExpensiveComponent } from "./expensiveComponent";
export const BadComponent = () => {
      console.log('bad component');

  const [counter, setCounter] = useState(0);
  return (
    <div className="w-[45%]">
      <div className="w-full justify-center flex">
        <h1 className="text-5xl font-bold tracking-tight text-foreground flex gap-x-3 pb-7">
          Bad Component
          <MdGppBad className="bg-white text-red-600" />
        </h1>
        <ExpensiveComponent/>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-y-10 pt-5">
          <h1 className="text-8xl font-bold tracking-tight text-foreground">
             {counter}
          </h1>
          <div className="gap-5 flex">
             <Button onClick={(e)=>{setCounter(counter+1)}} className={'py-6 text-xl cursor-pointer'}>Increment</Button>
             <Button onClick={(e)=>{setCounter(counter-1)}} className={'py-6 text-xl cursor-pointer'}>Decrement</Button>
          </div>
      </div>
    </div>
  );
};
