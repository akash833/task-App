import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import MyThemeContext from "@/context/theme-context";

export function ThemeSelector() {
  const { isDarkTheme, setThemeHandler } = React.useContext(MyThemeContext);

  return (
    <Select
      defaultValue={isDarkTheme ? "dark" : "light"}
      onValueChange={setThemeHandler}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Theme</SelectLabel>
          <SelectItem value="light">
            <div className="flex items-center gap-x-2 flex-row">
              <span>
                <Sun
                  className="text-neutral-700 dark:text-neutral-300"
                  size={18}
                />
              </span>
              <span>Light</span>
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-x-2 flex-row">
              <span>
                <Moon
                  className="text-neutral-700 dark:text-neutral-300"
                  size={18}
                />
              </span>
              <span>Dark</span>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
