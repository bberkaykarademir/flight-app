import type { Metadata } from "next";
import "./globals.css";
import TanstackProvider from "./components/TanstackProvider";

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
      <body className="bg-background">
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
