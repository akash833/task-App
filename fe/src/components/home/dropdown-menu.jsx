import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteTask } from "@/redux/slices/task-slice";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const CustomDropdownMenu = ({ task }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // task delete handler dispatch will be called over here
  const handleDeleteTask = () => {
    dispatch(deleteTask(task?.id));
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical size={15} className="dark:text-neutral-300" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>⌘ Task Actions</DropdownMenuLabel>
          <DropdownMenuSeparator className="border border-neutral-300 dark:border-neutral-500" />
          <DropdownMenuItem
            className="flex justify-between"
            onClick={() => router.push(`/task/${task?.id}`)}
          >
            <span>Edit</span>
            <span>
              <Pencil
                size={16}
                className="text-green-500 dark:text-green-600 cursor-pointer"
              />
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex justify-between"
            onClick={() => handleDeleteTask()}
          >
            <span>Delete</span>
            <span>
              <Trash2
                size={16}
                className="text-red-500 dark:text-red-600 cursor-pointer"
              />
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CustomDropdownMenu;
