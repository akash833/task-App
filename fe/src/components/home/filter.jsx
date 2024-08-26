import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { FiFilter } from "react-icons/fi"; // Example icon
import { useRouter } from "next/navigation";

const FilterDropdown = ({ fetchTasks }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const router = useRouter();

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    // Update the URL query parameter for filtering
    fetchTasks("", "", filter);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
        <FiFilter size={20} className="mr-2" />
        {selectedFilter}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-white border border-gray-200 rounded-lg shadow-lg z-10 dark:bg-gray-700 dark:text-white">
        <DropdownMenu.Item
          className="px-4 py-2 dark:hover:bg-gray-500 cursor-pointer"
          onClick={() => handleFilterChange("All")}
        >
          All
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-4 py-2 dark:hover:bg-gray-500  cursor-pointer"
          onClick={() => handleFilterChange("Completed")}
        >
          Completed
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-4 py-2 dark:hover:bg-gray-500  cursor-pointer"
          onClick={() => handleFilterChange("Pending")}
        >
          Pending
        </DropdownMenu.Item>
        {/* Add more filters as needed */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default FilterDropdown;
