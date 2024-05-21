"use client";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function NextAuthSessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: SessionProviderProps["session"] | null | undefined;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
