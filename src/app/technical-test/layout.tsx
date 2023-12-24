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
      <aside className="flex flex-col items-center gap-5 w-[300px] bg-slate-800  rounded-md opacity-50">
        <Link href={'/technical-test/cards'}>Tarjetas</Link>
        <Link href={'/technical-test/buttons'}>Botones</Link>
        <Link href={'/technical-test/step'}>Pasos</Link>
      </aside>

      <main className="flex-1">
        <section className="bg-[#4e4e4e4d] backdrop-blur-2xl rounded-md w-full h-full">
          { children }
        </section>
      </main>
    </div>
  );
}