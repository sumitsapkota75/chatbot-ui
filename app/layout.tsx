import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/sidenav";
import NextAuthSessionProvider from "@/context/sessionContext";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Demo",
  description: "Created by Sumit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
      <NextAuthSessionProvider session={session}>
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <SideNav />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
