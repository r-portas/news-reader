import feeds from "@/lib/feeds";
import Link from "@/components/Link";

// Don't statically render
export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allFeeds = feeds.getAvailableFeeds();
  return (
    <section className="flex">
      <nav className="flex-none w-48 border-r border-zinc-700 bg-zinc-900">
        <ul>
          {allFeeds.map((feed) => (
            <li key={feed.id}>
              <Link href={`/feeds/${feed.id}`}>{feed.displayName}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-auto">{children}</div>
    </section>
  );
}
