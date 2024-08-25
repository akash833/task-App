import React from "react";

const UpcomingTasks = () => {
  return (
    <>
      <div class="w-full p-0 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        <div class="mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white mb-2">
            Upcoming Tasks
          </h5>
          <div className="indicators flex items-center space-x-3">
            <span class="inline-flex items-center border border-neutral-200 dark:border-neutral-500 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-200">
              <span class="w-2 h-2 me-1 bg-[#93c5fd] rounded-full"></span>
              Low
            </span>
            <span class="inline-flex items-center border border-neutral-200 dark:border-neutral-500 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300">
              <span class="w-2 h-2 me-1 bg-[#60a5fa] rounded-full"></span>
              Medium
            </span>
            <span class="inline-flex items-center border border-neutral-200 dark:border-neutral-500 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-900 dark:text-gray-300">
              <span class="w-2 h-2 me-1 bg-[#2563eb] rounded-full"></span>
              High
            </span>
          </div>
        </div>
        <div class="flow-root">
          <ul
            role="list"
            class="divide-y divide-gray-200 dark:divide-gray-700 "
          >
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <span class="w-2.5 h-2.5 me-1 bg-[#93c5fd] rounded-full"></span>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Weekend Planning
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Planning of whole weekend
                  </p>
                </div>
                <div class="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  May 24
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <span class="w-2.5 h-2.5 me-1 bg-[#2563eb] rounded-full"></span>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Holiday Trip
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Trip to beijing
                  </p>
                </div>
                <div class="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  Aug 02
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <span class="w-2.5 h-2.5 me-1 bg-[#93c5fd] rounded-full"></span>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Reading Books
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    reading of books of readers
                  </p>
                </div>
                <div class="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  Sept 13
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center ">
                <span class="w-2.5 h-2.5 me-1 bg-[#2563eb] rounded-full"></span>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Software Coding
                  </p>
                  <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    Coding of whole software
                  </p>
                </div>
                <div class="text-sm inline-flex items-center font-semibold text-gray-900 dark:text-white">
                  Oct 26
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UpcomingTasks;
