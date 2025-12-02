import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { contextData, fields } from "./data";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { useForm } from "react-hook-form";
import { UserContext } from "./context";
import { Button } from "@/components/ui/button";

const GoodComponent = ({ children }) => {
  const form = useForm({
    defaultValues: {
      UserName: "",
      Email: "",
      Age: "",
      Country: "",
    },
  });
  return (
    <div className={"w-[45%]"}>
      <div className="w-full justify-center flex">
        <h1 className="text-5xl font-bold tracking-tight text-foreground flex gap-x-3 pb-7">
          <FaCheckCircle className="bg-white text-green-600" />
          Good Component
        </h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="space-y-4"
        >
          <UserContext.Provider
            value={contextData}
          >
            <div className="grid grid-cols-2 gap-4 ">{children}</div>
          </UserContext.Provider>

          <div className="flex justify-start items-center w-full my-[20px]">
            <Button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md w-1/3  "
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GoodComponent;
