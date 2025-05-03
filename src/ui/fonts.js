import { Urbanist, Playfair_Display } from "next/font/google";

export const urbanistFont = Urbanist({
  subsets: ["latin"],
  weight: [ "600", "500", "700", "900"],
});

export const playfairFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});