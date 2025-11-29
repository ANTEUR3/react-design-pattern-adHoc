import React from "react";
import { useForm } from "react-hook-form";
import { MdGppBad } from "react-icons/md";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { fields } from "./data";
import { Button } from "@/components/ui/button";

const BadComponent = () => {
  const form = useForm({
    defaultValues: {
      UserName: "",
      Email: "",
      Age: "",
      Country: "",
    },
  });
  console.log(fields);

  return (
    <div className="w-[45%]">
      <div className="w-full justify-center flex">
        <h1 className="text-5xl font-bold tracking-tight text-foreground flex gap-x-3 pb-7">
          Bad Component
          <MdGppBad className="bg-white text-red-600" />
        </h1>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => console.log(values))}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-5">
            {fields.map((item, inedx) => (
              <FormField
                key={item.label}
                control={form.control}
                name={item.label}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={"text-xl"}>{item.label}</FormLabel>
                    <FormControl>
                      {item.type == "input" ? (
                        <Input
                          className={"py-5"}
                          type="text"
                          placeholder={`Enter ${item.label}`}
                          {...field}
                        />
                      ) : (

                        <NativeSelect className={"w-full"}>
                          {item.options.map((option, index) => {
                            return (
                              <NativeSelectOption value="">
                                {option}
                              </NativeSelectOption>
                            );
                          })}
                        </NativeSelect>
                      )}
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>

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

export default BadComponent;
