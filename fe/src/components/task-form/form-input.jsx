import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";

const FormInput = ({ name, placeholder, control, label, type, error }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='dark:text-neutral-300'>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className="dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300"
            />
          </FormControl>
          <FormDescription className="text-red-500">{error}</FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
