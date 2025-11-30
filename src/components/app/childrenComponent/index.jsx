import { BadComponent } from "./badComponent";
import { ChildrenComponent_ } from "./childrenComponent";
import { ExpensiveComponent } from "./expensiveComponent";
export const ChildrenComponent = () => {
  return (
    <div className=" w-full flex flex-col items-center px-20  ">
      <h1 className="text-8xl font-bold tracking-tight text-foreground">
        Compound Component
      </h1>
      <div className="flex justify-between py-[60px] w-full">
        <BadComponent />
        <ChildrenComponent_>
           <ExpensiveComponent/>
        </ChildrenComponent_>
      </div>
    </div>
  );
};
