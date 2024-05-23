import { getServerSession } from "next-auth";

export default async function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  console.log("login layout")
  const session = await getServerSession();
  return (
      <main className="pt-12 h-screen">{children}</main>
  );
}
