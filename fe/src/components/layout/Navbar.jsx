"use client";
import { IoIosHome, IoMdSettings } from "react-icons/io";
import Link from "next/link";
import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { CircleUserRound, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { SettingsPopover } from "./setting-popover";
import { AccountPopover } from "./account-popover";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-blue-100 border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-600 dark:border-gray-500">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {/* Home */}
        <Link
          href={"/home"}
          data-tooltip-target="tooltip-home"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <IoIosHome
            size={28}
            className="text-blue-600 dark:text-blue-300"
            title="Home"
          />
          <span className="sr-only">Home</span>
        </Link>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        {/* dashboard  */}
        <Link
          href={"/dashboard"}
          data-tooltip-target="tooltip-wallet"
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <MdDashboardCustomize
            size={28}
            className="text-green-600 dark:text-green-400"
            title="Dashboard"
          />
          <span className="sr-only">Wallet</span>
        </Link>
        <div
          id="tooltip-wallet"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Dashboard
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        {/* add new items */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => router.push("/task/add")}
            data-tooltip-target="tooltip-new"
            type="button"
            className="inline-flex items-center justify-center w-16 h-16 font-medium bg-blue-600 dark:hover:bg-blue-600 dark:bg-blue-500 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <Plus className="text-white" />
            <span className="sr-only">New item</span>
          </button>
        </div>
        <div
          id="tooltip-new"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        {/* settings */}
        <SettingsPopover>
          <span
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group cursor-pointer"
          >
            <IoMdSettings
              size={28}
              className="text-gray-600 dark:text-gray-300"
              title="Dashboard"
            />
            <span className="sr-only">Settings</span>
          </span>
        </SettingsPopover>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <AccountPopover>
          <span className="cursor-pointer inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <CircleUserRound
              size={28}
              className="text-gray-600 dark:text-gray-300"
              title="Profile"
            />
            <span className="sr-only">Profile</span>
          </span>
        </AccountPopover>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
