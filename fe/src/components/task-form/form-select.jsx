import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";

const FormSelect = ({
  name,
  placeholder,
  control,
  label,
  error,
  options,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='dark:text-neutral-300'>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-[220px] dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent ref={field.ref} className='dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-100 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300'>
                {options?.map((option) => (
                  <SelectItem value={option?.value}>{option?.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription className="text-red-500">{error}</FormDescription>
        </FormItem>
      )}
    />
  );
};

export default FormSelect;
