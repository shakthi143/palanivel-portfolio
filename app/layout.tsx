import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { contact } from "@/lib/contact";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Explore Palanivel M.'s portfolio showcasing modern websites, full-stack applications and SaaS development projects.";

export const metadata: Metadata = {
  title: "Palanivel M. | Full Stack & SaaS Developer",
  description,
  ...(siteUrl
    ? {
        metadataBase: siteUrl,
        alternates: { canonical: "/" },
      }
    : {}),
  openGraph: {
    title: "Palanivel M. | Full Stack & SaaS Developer",
    description,
    siteName: contact.name,
    type: "website",
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  },
  twitter: {
    card: "summary",
    title: "Palanivel M. | Full Stack & SaaS Developer",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
