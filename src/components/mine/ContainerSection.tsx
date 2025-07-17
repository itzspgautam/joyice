"use client";

import { ReactNode } from "react";
import clsx from "clsx"; // Utility for conditional class merging

interface ContainerSectionProps {
  children: ReactNode;
  className?: string; // Allow passing a custom class
}

export default function ContainerSection({
  children,
  className,
}: ContainerSectionProps) {
  return (
    <section
      className={clsx("w-full flex justify-center px-6 pt-6", className)}
    >
      <div className="container md:px-10">{children}</div>
    </section>
  );
}
