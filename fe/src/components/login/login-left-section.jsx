import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";

const LoginLeftSection = () => {
  return (
    <section className="left-container w-[40rem]">
      <Link
        href="#"
        class="flex items-center mb-8 text-4xl font-semibold text-neutral-900 dark:text-white"
      >
        <Image
          class="w-14 h-14 mr-4"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
          height={80}
          width={80}
        />
        Lens Task Manager
      </Link>

      <div className="list-features pl-12">
        <ul class="space-y-10">
          <li class="flex items-baseline gap-x-4">
            <div>
              <FaCircleCheck className="text-blue-500" size={20} />
            </div>
            <div className="grid grid-cols-1">
              <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                Get Started in No Time
              </span>
              <span className="line-clamp-1 text-neutral-600 dark:text-neutral-400">
                Integrate with developer-friendly APIs or choose low-code.
              </span>
            </div>
          </li>
          <li class="flex items-baseline gap-x-4">
            <div>
              <FaCircleCheck className="text-blue-500" size={20} />
            </div>
            <div className="grid grid-cols-1">
              <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                Join a Growing Community
              </span>
              <span className="line-clamp-2 text-neutral-600 dark:text-neutral-400">
                Trusted by startups and enterprises alike, Lens Corporation's.
              </span>
            </div>
          </li>
          <li class="flex items-baseline gap-x-4">
            <div>
              <FaCircleCheck className="text-blue-500" size={20} />
            </div>
            <div className="grid grid-cols-1">
              <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                Flexible for Any Business Model
              </span>
              <span className="line-clamp-1 text-neutral-600 dark:text-neutral-400">
                Keep your Tasks & proprietary secured with us.
              </span>
            </div>
          </li>
          <li class="flex items-baseline gap-x-4">
            <div>
              <FaCircleCheck className="text-blue-500" size={20} />
            </div>
            <div className="grid grid-cols-1">
              <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                Streamline Collaboration
              </span>
              <span className="line-clamp-1 text-neutral-600 dark:text-neutral-400">
                Empower your team with tools designed for efficiency and
                effective communication.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LoginLeftSection;
