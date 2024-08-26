import React from "react";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  control,
  placeholder,
  label,
  error,
  options,
  defaultValue,
}) => {
  return (
    <div className="mb-4">
      {label && <label className="dark:text-neutral-300">{label}</label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""} // Ensure to set default value correctly
        render={({ field }) => (
          <select
            {...field}
            className={`dark:bg-gray-600 w-full h-10 mt-2 rounded-md border dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300 dark:text-neutral-300 ${
              error ? "border-red-500" : ""
            }`}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormSelect;
