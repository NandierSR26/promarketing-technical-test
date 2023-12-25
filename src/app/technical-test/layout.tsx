import { Sidebar } from "@/library/components";

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
    <div className="flex flex-col flex-1 gap-5 w-full container mx-auto">
      <Sidebar />
      <main className="bg-[#4e4e4e4d] backdrop-blur-2xl rounded-md w-full p-5">
          {children}
      </main>
    </div>
  );
}