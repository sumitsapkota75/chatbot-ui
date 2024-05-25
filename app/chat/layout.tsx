import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/app/components/header";
import SideNav from "@/app/components/sidenav";
import NextAuthSessionProvider from "@/context/sessionContext";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat-GPT",
  description: "Created by Sumit",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="flex ">
        <SideNav />
        <main className="flex-1">{children}</main>
      </div>
    </main>
  );
}
