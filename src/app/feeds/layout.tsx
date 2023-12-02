import feeds from "@/lib/feeds";
import Link from "./Link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allFeeds = feeds.getAvailableFeeds();
  return (
    <section className="flex h-full">
      <nav className="flex-none w-48 border-r border-zinc-700 bg-zinc-900">
        <ul>
          {allFeeds.map((feed) => (
            <li key={feed.id}>
              <Link href={`/feeds/${feed.id}`}>{feed.displayName}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-auto overflow-auto">{children}</div>
    </section>
  );
}
