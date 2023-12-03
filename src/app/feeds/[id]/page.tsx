import feeds from "@/lib/feeds";
import { formatDistanceToNow } from "date-fns";

export default async function Page({ params }: { params: { id: string } }) {
  const feed = await feeds.getFeed(params.id);

  return (
    <div>
      <div className="border-b border-zinc-700 p-2 flex items-center">
        <h1 className="text-xl font-bold uppercase">{feed.displayName}</h1>
        {feed.published ? (
          <p className="pl-2">
            (published{" "}
            {formatDistanceToNow(feed.published, { addSuffix: true })})
          </p>
        ) : null}
      </div>

      <ul className="p-2">
        {feed.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
