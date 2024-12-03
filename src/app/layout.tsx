/** @format */

import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Invitato Code Test",
  description: "Built with Next.js, Chakra UI, and react-spring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body className={crimsonPro.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
