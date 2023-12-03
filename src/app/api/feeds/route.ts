import Parser from "rss-parser";

const parser = new Parser();

/**
 * A helper API method to inspect the raw feed data
 *
 * @param request - The request, the body must contain a "url" field
 * @returns - The parsed feed, in JSON format
 */
export async function POST(request: Request) {
  const res = await request.json();
  if (!res.url) {
    return new Response(`No "url" field in request body`, { status: 400 });
  }

  const feed = await parser.parseURL(res.url);

  return Response.json(feed);
}
