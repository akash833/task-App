import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CustomDropdownMenu = ({ task, setTasks }) => {
  const router = useRouter();

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to delete the task");
    }
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
            onClick={() => handleDeleteTask(task?.id)}
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
