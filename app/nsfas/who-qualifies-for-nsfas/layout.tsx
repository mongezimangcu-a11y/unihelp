import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata = {
  title: "Who qualifies for NSFAS in South Africa? | UniHelp",
  description:
    "Find out who qualifies for NSFAS in South Africa, including eligibility requirements, household income rules, and common reasons students are rejected.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}