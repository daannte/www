import { Inter, Geist_Mono } from "next/font/google";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { sans, mono };
