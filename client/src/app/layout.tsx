import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flight App",
  description: "Check out the best flights",
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
