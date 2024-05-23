import "./globals.css";
import NextAuthSessionProvider from "@/context/sessionContext";
import { getServerSession } from "next-auth";

export default async function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="h-screen">
      <NextAuthSessionProvider session={session}>
          <main>{children}</main>
      </NextAuthSessionProvider>
      </body>
    </html>
  );
}
