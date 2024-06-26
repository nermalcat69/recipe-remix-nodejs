"use client";

import { useState } from "react";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface CodeBlockProps {
  code: string;
  file: string;
  fileLink: string;
}

export function Code({ code, file, fileLink }: CodeBlockProps) {
  const [icon, setIcon] = useState(CopyIcon);

  const copy = async () => {
    await navigator?.clipboard?.writeText(code);
    setIcon(CheckIcon);
    setTimeout(() => setIcon(CopyIcon), 2000);
  };

  return (
    <pre className="my-8 bg-[#eeeeee] h-full rounded-md">
      <a href={fileLink} target="_blank" className="link flex justify-center py-1 text-sm">{file}</a>
      <pre className="bg-[#F7F7F7] rounded-md h-full p-8 relative">
      <button
        onClick={copy}
        className="absolute top-4 right-4 p-2 rounded-md bg-[#585858] hover:bg-[#4a4a4a] copybtn duration-300  text-white"
      >
        {icon}
      </button>
      <code className="text-[#585858] text-sm font-normal">{code}</code>
      </pre>
    </pre>
  );
}
