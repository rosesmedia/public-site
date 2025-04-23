import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  MantineProvider,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roses Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/roses-logo.png"
          type="image/png"
          sizes="304x304"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider>
          <AppShell>
            <AppShellHeader
              style={{
                fontFamily: '"ff-good-web-pro-condensed", sans-serif',
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: "50px",
                padding: "5px",
                paddingLeft: "20px",
                margin: 0,
                height: "70px",
                display: "flex",
              }}
            >
              <Link
                href={"/"}
                style={{
                  display: "flex",
                }}
              >
                <Image
                  src={"/roses-logo.png"}
                  alt="Roses Live 2025 Logo"
                  width={59}
                  height={59}
                  className="mr-2"
                />
                <div
                  style={{
                    transform: "translate(0, -3px)",
                  }}
                >
                  Roses Media
                </div>
              </Link>
            </AppShellHeader>
            <AppShellMain h={"100%"} className="!pt-[70px]">
              {children}
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
