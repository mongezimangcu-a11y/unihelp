import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "APS Calculator | UniHelp",
  description:
    "Calculate an estimated APS (Admission Point Score) from your matric marks using a common points table. Rules can differ by university.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}