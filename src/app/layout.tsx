import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";
import React from "react";

export const metadata: Metadata = {
  title: "Sellenza",
  description: "E-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.StrictMode>
      <html lang="en">
        <body className="text-zinc-950 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900">
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
              <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </React.StrictMode>
  );
}
