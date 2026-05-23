import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { bookConfig } from "@/content/book.config";

export const metadata: Metadata = {
  title: {
    default: bookConfig.title,
    template: `%s | ${bookConfig.title}`
  },
  description: bookConfig.description,
  authors: [{ name: bookConfig.author }],
  openGraph: {
    title: bookConfig.title,
    description: bookConfig.description,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
