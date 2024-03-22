import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ossama Bin Bilal",
  description: "Portfolio/Resume for Ossama Bin Bilal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
