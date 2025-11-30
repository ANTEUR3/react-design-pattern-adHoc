import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  console.log("yes");

  return (
    <div className="h-screen py-5  ">
      <div className="space-y-2">
        <h1 className="text-8xl font-bold tracking-tight text-foreground">
          React Design Pattern
        </h1>
        <div className="flex justify-center items-center gap-x-5 py-5">
          <Button className={'py-7 text-xl'}><Link to={'/compoundComponent'}>  Compound Component</Link></Button>
          <Button className={'py-7 text-xl'}><Link to={'childrenComponent'}>  Children Component</Link></Button>
          <Button className={'py-7 text-xl'}><Link>  Compound Component</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
