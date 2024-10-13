import type { Metadata } from "next";
import {Bubblegum_Sans} from "next/font/google";
import "./globals.css";

const honk = Bubblegum_Sans({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Dark Fantasy",
  description: "Chads Realm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={honk.className}
      >
        {children}
      </body>
    </html>
  );
}
