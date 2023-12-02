import Link from "@/components/Link";

export default function Header() {
  return (
    <div className="border-b border-zinc-700 bg-zinc-900 flex items-center justify-between">
      <h1 className="pl-4 text-xl font-bold uppercase">News Reader</h1>

      <div>
        <Link href="/feeds">Feeds</Link>
      </div>
    </div>
  );
}
