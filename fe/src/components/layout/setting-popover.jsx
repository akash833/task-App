import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemeSelector } from "./theme-selector";
import { Switch } from "../ui/switch";

export function SettingsPopover({ children }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">App Settings</h4>
            <p className="text-sm dark:text-gray-300 text-gray-600">
              Set the theme & Notification preference
            </p>
          </div>
          <div className="grid gap-2">
            {/* Theme selector */}
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Theme</Label>
              <ThemeSelector />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Notifications</Label>
              <Switch size="sm" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
