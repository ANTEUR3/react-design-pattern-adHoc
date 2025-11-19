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
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
const Selects = () => {
  const { selects } = useContext(UserContext);
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
      {selects.map((item) => {
        return (
          <FormField
            key={item.label}
            control={form.control}
            name={item.label}
            className={'w-full'}
            render={({ field }) => (
              <FormItem className={'w-full'}>
                <FormLabel className={"text-xl"}>{item.label}</FormLabel>
                <FormControl className={'w-full'}>
                  <NativeSelect className={"w-full"}>
                    {item.options.map((option, index) => {
                      return (
                        <NativeSelectOption className={'w-full'} value="">
                          {option}
                        </NativeSelectOption>
                      );
                    })}
                  </NativeSelect>
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

export default Selects;
