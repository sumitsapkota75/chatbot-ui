import { getServerSession } from "next-auth";

export default function authLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="pt-12 bg-auth-footer bg-no-repeat bg-bottom h-screen">
        {children}
      </section>
    );
  }
  