import feeds from "@/lib/feeds";
import { formatDistanceToNow } from "date-fns";

export default async function Page({ params }: { params: { id: string } }) {
  const feed = await feeds.getFeed(params.id);

  return (
    <div>
      <div className="border-b border-zinc-700 p-2 flex items-center">
        <h1 className="text-xl font-bold uppercase">{feed.displayName}</h1>
        {feed.published ? (
          <p className="pl-2 text-sm">
            published {formatDistanceToNow(feed.published, { addSuffix: true })}
          </p>
        ) : null}
        <p className="pl-2 text-sm">
          fetched {formatDistanceToNow(feed.fetched, { addSuffix: true })}
        </p>
      </div>

      {feed.items.map((item) => (
        <div key={item.id} className="border-b border-zinc-700 flex">
          {item.previewImage !== undefined && (
            <img className="w-48 object-cover" src={item.previewImage} />
          )}
          <div className="p-2">
            <h5 className="font-bold">{item.title}</h5>
            {item.summary !== undefined && (
              <p className="text-sm text-zinc-200">{item.summary}</p>
            )}

            {item.categories.length > 0 && (
              <div className="flex flex-wrap">
                {item.categories.map((category) => (
                  <span
                    key={category}
                    className="bg-zinc-700 text-zinc-200 text-xs rounded-full px-2 py-1 mr-1 mt-1"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
