import { Output, Item as IItem } from "rss-parser";
import Item from "./item";

export interface FeedConfig {
  id: string;
  displayName: string;
  url: string;
}

export interface ParsedFeed extends Output<IItem> {
  pubDate?: string;
  lastBuildDate?: string;
}

export default class Feed {
  /**
   * The display name of the feed
   */
  public displayName: string;

  /**
   * The logo of the publisher
   */
  public logo?: string;

  /**
   * The time the feed was published
   */
  public published?: Date;

  /**
   * The time the feed was fetched
   */
  public fetched: Date;

  /**
   * The items in the feed
   */
  public items: Item[];

  constructor(result: ParsedFeed, config: FeedConfig) {
    this.displayName = config.displayName;
    this.fetched = new Date();
    if (result.lastBuildDate) {
      this.published = new Date(result.lastBuildDate);
    }
    if (result.pubDate) {
      this.published = new Date(result.pubDate);
    }
    this.logo = result.image?.url;
    this.items = result.items.map((item) => new Item(item));
  }
}
