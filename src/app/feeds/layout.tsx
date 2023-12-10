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
    <section className="flex flex-col lg:flex-row">
      <nav className="flex-none lg:w-48 lg:border-r border-zinc-700 bg-zinc-900">
        <ul className="flex flex-row lg:flex-col overflow-scroll">
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
