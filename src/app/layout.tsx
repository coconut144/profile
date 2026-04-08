import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navber";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thitima Ampawa — Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={`${geist.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}