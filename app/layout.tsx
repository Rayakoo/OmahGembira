import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import PublicShell from "./PublicShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omah Gembira | Yayasan Pemerhati Disabilitas",
  description:
    "Omah Gembira adalah yayasan pemerhati disabilitas yang menciptakan ruang aman dan inklusif bagi penyandang disabilitas untuk berkarya, belajar, dan tumbuh bersama.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Omah Gembira | Yayasan Pemerhati Disabilitas",
    description:
      "Omah Gembira adalah yayasan pemerhati disabilitas yang menciptakan ruang aman dan inklusif bagi penyandang disabilitas untuk berkarya, belajar, dan tumbuh bersama.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <PublicShell>{children}</PublicShell>
        </Providers>
      </body>
    </html>
  );
}
