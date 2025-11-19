import React, { useContext } from "react";
import { UserContext } from "./context";
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
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
const Checkboxes = () => {
  const { checkboxes } = useContext(UserContext);
  const form = useForm({
    defaultValues: {
      UserName: "",
      Email: "",
      Age: "",
      Country: "",
    },
  });
  
  return (
    <>
      {checkboxes.map((item) => {
        return (
          <FormField
            key={item.label}
            control={form.control}
            name={item.label}
            render={({ field }) => (
              <FormItem className={"gap-y-4"}>
                <FormControl>
                 <div className="flex items-center gap-3">
                  <Checkbox className={'h-6 w-6'}  id={item.label} />
                  <Label className={'text-xl'} htmlFor={item.label}>{item.label}</Label>
                 </div>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
    </>
  );
};

export default Checkboxes;
