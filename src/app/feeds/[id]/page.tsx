import feeds from "@/lib/feeds";

export default async function Page({ params }: { params: { id: string } }) {
  const feed = await feeds.getFeed(params.id);

  return (
    <div>
      <div className="border-b border-zinc-700 p-2">
        <h1 className="text-xl font-bold uppercase">{feed.displayName}</h1>
      </div>

      <ul className="p-2">
        {feed.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
