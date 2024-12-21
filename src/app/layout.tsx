"use client"

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { useAuth } from "@/app/hooks/useAuth";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <html lang="en">
        <body>
          <div className="flex items-center justify-center h-screen bg-zinc-50 dark:bg-zinc-900">
            <p>Loading...</p>
          </div>
        </body>
      </html>
    );
  }

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
