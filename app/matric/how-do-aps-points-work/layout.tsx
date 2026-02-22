import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "How do APS points work in South Africa? | UniHelp",
  description:
    "Learn how APS points are calculated in South Africa, including a common APS points table, an example calculation, and what to do if your APS is too low.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}