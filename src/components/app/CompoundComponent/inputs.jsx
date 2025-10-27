import React, { useContext } from 'react'
import { UserContext } from './context';
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
import { useForm } from 'react-hook-form';
const Inputs = () => {
      const { inputs } = useContext(UserContext);
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
     {inputs.map((item)=>{
    return <FormField
              key={item.label}
              control={form.control}
              name={item.label}
              render={({ field }) => (
                <FormItem className={'gap-y-4'}>
                  <FormLabel className={'text-xl'}>{item.label}</FormLabel>
                  <FormControl>
                    
                      <Input
                        className={'py-5'}
                        type="text"
                        placeholder={`Enter ${item.label}`}
                        {...field}
                      />
                    
                  
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
   })}
    </>
  
  )
}

export default Inputs

