"use client";

import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function FooterComp() {
  return (
    <Footer container>
      <div className="flex w-full flex-col items-center justify-center gap-3 py-6">
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/fdhilahtsaa?igsh=MWQ5b3J5YXNmbW1pdg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <BsInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/fadhilah-tsawabiyah-nurhafid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <BsLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/dielaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <BsGithub className="h-5 w-5" />
          </a>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Fadhilah Tsawabiyah Nurhafid
        </span>
      </div>
    </Footer>
  );
}
