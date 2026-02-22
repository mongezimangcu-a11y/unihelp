import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "What happens if you fail matric in South Africa? | UniHelp",
  description:
    "Failing matric is not the end. Learn your options in South Africa, including rewrites, upgrades, adult matric, TVET colleges, and skills courses.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}