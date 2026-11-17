import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Psychologists.Services",
  description: "We help you to reveal your potential, overcome challenges and find a guide in your own life with the help of our experienced psychologists.",
};

export default function RootLayout({ children, modal, }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main>
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}
