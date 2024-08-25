import React from "react";
import { TaskActionCard } from "./Task-action-card";
import { ScrollArea } from "../ui/scroll-area";

const TaskDetailsCard = ({ selectedTask }) => {
  return (
    <div className="h-[calc(100vh-10rem)] rounded-md ml-8 mt-2 mb-20 bg-white dark:bg-gray-700 w-full p-5">
      
      {/* task actions here */}
      <TaskActionCard selectedTask={selectedTask} className={'dark:bg-gray-800 dark:border-gray-700'}/>

      {/* Task description */}
      <ScrollArea className='h-[calc(100vh-36rem)] p-3 m-2'>
        <p className="text-neutral-500 dark:text-neutral-300">
          {selectedTask?.description || ""}
        </p>
        <br />

        {/* paragraph added for static data for demo purpose*/}
        <p className="text-neutral-500 dark:text-neutral-300">
          This paragraph is added for static data for demo purpose.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
          voluptate id quo nihil non soluta aut tempore sapiente, alias cumque,
          error ipsa placeat optio vitae deleniti consectetur commodi quod,
          expedita provident recusandae culpa architecto maxime impedit.
          Sapiente vel, tenetur illum exercitationem laboriosam aperiam
          accusamus temporibus ullam beatae officia fugiat rerum voluptatem,
          animi libero maxime a odio amet culpa alias omnis neque dicta quia
          nisi! Laudantium necessitatibus, dicta vitae minima consequatur
          perspiciatis porro sunt blanditiis ad officia tempora laboriosam
          adipisci earum sed distinctio neque rerum labore exercitationem esse
          ab totam tenetur voluptatem nemo. In cum, eaque magnam officiis id at
          deleniti iste, perspiciatis atque voluptas vel voluptates voluptatum
          ex non modi reprehenderit ipsum aliquam, recusandae fugiat neque
          fugit. Debitis quos in itaque iure qui dicta assumenda, hic,
          necessitatibus vero autem voluptas quaerat incidunt ipsam laborum non
          fugit similique amet? Repellendus labore, magni itaque dignissimos
          recusandae odio deserunt porro eaque commodi iure?
        </p>
      </ScrollArea>
    </div>
  );
};

export default TaskDetailsCard;
