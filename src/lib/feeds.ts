import { readFileSync, existsSync } from "fs";
import Parser from "rss-parser";
import logger from "./logger";
import Item from "./item";
import Feed, { FeedConfig } from "./feed";

const log = logger("feeds");

const FEEDS_FILE = "./feeds.json";

export class Feeds {
  private feeds: FeedConfig[];
  private parser: Parser;

  constructor() {
    this.parser = new Parser();

    // Check if FEEDS_FILE exists
    if (!existsSync(FEEDS_FILE)) {
      throw new Error(`"${FEEDS_FILE}" does not exist`);
    }

    const file = readFileSync(FEEDS_FILE, { encoding: "utf-8" });
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
