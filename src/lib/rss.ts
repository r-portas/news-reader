import Parser from "rss-parser";

const parser = new Parser();

export async function readFeed(feedUrl: string) {
  const feed = await parser.parseURL(feedUrl);
}
