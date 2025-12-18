import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snap - Make Remote Work",
  description: "Snap - Make Remote Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${epilogue.variable} mx-auto max-w-7xl antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
