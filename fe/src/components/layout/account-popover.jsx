import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { LogOut } from "lucide-react";
import Link from "next/link";

export function AccountPopover({ children }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-32">
        <div className="max-w-24">
          <Link
            href={"/"}
            className="text-red-500 dark:text-red-400 dark:hover:bg-gray-800 hover:bg-gray-100 p-2 rounded-md flex items-center gap-x-2"
          >
            <LogOut size={15} />
            Logout
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
