import type { Metadata } from "next";
import "./globals.css";
import { letters } from "@/libs/letters";
import { Navbar } from "@nextui-org/react";


export const metadata: Metadata = {
  title: "Healthy Beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={letters.secondary.className}>
        {children}
      </body>

    </html>
  );
}
