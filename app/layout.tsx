import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideNav from "@/components/sidenav";
import NextAuthSessionProvider from "@/context/sessionContext";
import { getServerSession } from "next-auth";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat-GPT",
  description: "Created by Sumit",
};
const loginPage = ["/auth/login"];
const shouldRenderLayout = (pathname: string) => {
  // You can customize the logic based on your route structure
  // Example: exclude the login page from layout
  return !pathname.startsWith("/auth/login");
};

export default async function RootLayout({
  children,
  pathname,
}: Readonly<{
  children: React.ReactNode;
  pathname: string;
}>) {
  const session = await getServerSession();
  const shouldRenderLayout = pathname !== "/auth/login";
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        {shouldRenderLayout && (
          <NextAuthSessionProvider session={session}>
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <SideNav />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </NextAuthSessionProvider>
        )}
        {!shouldRenderLayout && (
          <main className="flex-1 overflow-auto">{children}</main>
        )}
      </body>
    </html>
  );
}