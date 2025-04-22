import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Võ Việt Hùng Portfolio",
  description: "Võ Việt Hùng Portfolio",
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
