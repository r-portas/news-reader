import { readFileSync, existsSync } from "fs";
import Parser from "rss-parser";
import logger from "./logger";
import Feed, { FeedConfig } from "./feed";

const log = logger("feeds");

const FEEDS_FILES = ["./feeds.json", "./feeds.example.json", "/feeds.json"];

export class Feeds {
  private feeds: FeedConfig[];
  private parser: Parser;

  constructor() {
    this.parser = new Parser();

    let file: string | undefined;
    for (const f of FEEDS_FILES) {
      if (existsSync(f)) {
        file = readFileSync(f, { encoding: "utf-8" });
        break;
      }
    }

    if (!file) {
      throw new Error("Could not find a feed file");
    }

    this.feeds = JSON.parse(file);

    log(`Loaded ${this.feeds.length} feeds`);
  }

  async getFeed(id: string): Promise<Feed> {
    const feed = this.feeds.find((feed) => feed.id === id);

    if (!feed) {
      throw new Error(`"${id}" feed does not exist`);
    }

    log(`Fetching feed "${feed.displayName}" (${feed.url})`);
    const result = await this.parser.parseURL(feed.url);
    return new Feed(result, feed);
  }

  getAvailableFeeds() {
    return this.feeds;
  }
}

const feeds = new Feeds();
export default feeds;
