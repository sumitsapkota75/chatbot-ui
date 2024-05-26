import "./globals.css";
import NextAuthSessionProvider from "@/context/sessionContext";
import TanstackProvider from "@/context/tanstackContext";
import { getServerSession } from "next-auth";

export default async function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="h-screen ">
      <TanstackProvider>
      <NextAuthSessionProvider session={session}>
          <main>{children}</main>
      </NextAuthSessionProvider>
      </TanstackProvider>
      </body>
    </html>
  );
}
