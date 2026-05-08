import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Outsource Your Tasks — Global Staffing for Growing Companies",
  description:
    "OYT is a boutique global staffing firm that finds, screens, and delivers top talent — offshore, nearshore, or US local. One flat fee. 12-month warranty.",
  keywords: [
    "global staffing",
    "nearshore talent",
    "offshore staffing",
    "boutique recruiting",
    "outsource hiring",
    "remote talent",
  ],
  openGraph: {
    title: "Outsource Your Tasks — Global Staffing for Growing Companies",
    description:
      "We find world-class global talent. You just choose the best fit.",
    url: "https://outsourceyourtasks.com",
    siteName: "Outsource Your Tasks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
