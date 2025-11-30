import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export const ChildrenComponent_=({children})=>{

    const [counter, setCounter] = useState(0);
    console.log('children component');
    
    return (
        <div className="w-[45%]">
            {children}
      <div className="w-full justify-center flex">
        <h1 className="text-5xl font-bold tracking-tight text-foreground flex gap-x-3 pb-7">
          Children Component
          <FaCheckCircle className="bg-white text-green-600" />
        </h1>
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
    )
}    
    
    
    