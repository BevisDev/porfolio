import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import React, { PropsWithChildren } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Bevis Dev | Portfolio",
  description: "My personal website",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} antialiased`}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        suppressHydrationWarning={true}
        className="bg-[#0a192f] text-gray-300"
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
