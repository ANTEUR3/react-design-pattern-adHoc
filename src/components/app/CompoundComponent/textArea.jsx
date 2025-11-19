import React, { useContext } from 'react'
import { UserContext } from './context';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from 'react-hook-form';
const TextArea = () => {
      const { textArea } = useContext(UserContext);
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
      {textArea?.map((item) => {
        return (
          <FormField
            key={item.label}
            control={form.control}
            name={item?.label}
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl"}>{item.label}</FormLabel>
                <FormControl>
                  <Textarea placeholder={item?.placeholder}/>
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
    </>
  )
}

export default TextArea