import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { sans, mono } from "./fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Dante",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${sans.variable} ${mono.variable} antialiased h-screen mx-auto max-w-4xl flex flex-col font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
