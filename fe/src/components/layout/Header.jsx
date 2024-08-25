"use client";
import React from "react";
import CustomBreadcrumb from "./Breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowLeft, LayoutPanelTop } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = ({ breadcrumbArray, pageTitle }) => {
  const location = usePathname()?.split("/");
  const router = useRouter();

  return (
    <div className="header mb-4">
      <div className="flex items-start">
        {/* back button */}
        {location?.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            className="p-1 mr-2 hover:bg-blue-400 hover:text-white h-6 dark:text-white dark:hover:bg-blue-400"
            onClick={() => router.back()}
          >
            <ArrowLeft size={15} />{" "}
          </Button>
        )}
        <div>
          {/* breadcrumb and header */}
          <CustomBreadcrumb breadcrumbArray={breadcrumbArray} />
          <div className="flex items-center gap-x-2">
            <LayoutPanelTop
              className="text-blue-600 dark:text-blue-400"
              size={19}
            />
            <h2 className="text-2xl text-blue-600 dark:text-blue-400 mt-1">
              {pageTitle || ""}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
