import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/config";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FFF5F7",
};

export const metadata: Metadata = {
  title: `Happy Birthday ${siteConfig.girlfriendName}! ❤️`,
  description: "A special handcrafted birthday scrapbook just for you.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: `For ${siteConfig.girlfriendName}`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
