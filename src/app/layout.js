import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata = {
  title: "Abhi Prajapati | FULL Stack Developer",
  description: "Amazing portfolio of Abhi Prajapati, a passionate MERN stack developer and BCA student.",
};

import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] text-[#f0f0f0]`}>
        <Preloader>
          <SmoothScroll>
            <CustomCursor />
            {children}
            <Analytics />
          </SmoothScroll>
        </Preloader>
      </body>
    </html>
  );
}
