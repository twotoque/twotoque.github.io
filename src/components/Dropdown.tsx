"use client";

import { useState } from "react";

type DropdownSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean; // optional
};

export default function DropdownSection({
  title,
  children,
  defaultOpen = false // fallback if not provided
}: DropdownSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-200 mb-6">
      {/* Header */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="w-full flex items-center justify-between text-left px-6 py-5"
      >
        <h4 className="text-3xl !font-light m-0">
          {title}
        </h4>

        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Body */}
      {open && (
        <div className="px-6 pb-6 pt-6 bg-white border-t border-neutral-200">
          <div className="space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
