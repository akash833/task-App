import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

const CustomBreadcrumb = ({ breadcrumbArray }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbArray?.map((Item) => {
          return (
            <>
              <BreadcrumbItem>
                {Item?.link ? (
                  <Link
                    href={Item?.link || "#"}
                    className="transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
                  >
                    {Item?.name || ""}
                  </Link>
                ) : (
                  <BreadcrumbPage>{Item?.name || ""}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
