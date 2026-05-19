import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "SBTI 日本語版";
const SITE_DESCRIPTION =
  "本家 SBTI(Silly Behavioral Type Indicator)の日本語版(ベータ)。27タイプから、午前3時に投稿する方のあなたを診断する。10問1〜2分。";

export const metadata: Metadata = {
  metadataBase: new URL("https://sbti-ja.vercel.app"),
  title: {
    default: `SBTI 診断 — ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `SBTI 診断 — ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `SBTI 診断 — ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
