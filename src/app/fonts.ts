import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const space = Space_Grotesk({
  variable: '--font-space',
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});