import { Sidebar } from "@/components/Sidebar/Sidebar";
import Link from "next/link";

export const metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
};
export default function TestPageLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 px-5 gap-5">
      <Sidebar />
      <main className="flex-1">
        <section className="bg-[#4e4e4e4d] backdrop-blur-2xl rounded-md w-full h-full">
          {children}
        </section>
      </main>
    </div>
  );
}