import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { fields } from "./data";
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

UserContext;
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
    <div className={"w-50%"}>
      <h1 className="text-5xl font-bold tracking-tight text-foreground flex gap-x-3 pb-7">
        <FaCheckCircle className="bg-white text-green-600" />
        Good Component
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="space-y-4"
        >
          <UserContext.Provider
            value={{
              inputs: [
                { label: "UserName", type: "input" },
                { label: "Email", type: "input" },
              ],
              selects: [
                {
                  label: "Country",
                  type: "select",
                  options: ["Algeria", "Moroco", "Tunisia", "Egypt"],
                },
                {
                  label: "Age",
                  type: "select",
                  options: ["18-23", "24-30", "31-35", ">35"],
                },
              ],
              checkboxes: [
                {
                  label: "Accept terms and conditions",
                },
                {
                  label: "I'm not robot",
                },
              ],
            }}
          >
            {children}
          </UserContext.Provider>
      

          <Button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default GoodComponent;
