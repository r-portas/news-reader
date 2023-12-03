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
  public displayName: string;
  public logo?: string;
  public published?: Date;
  public items: Item[];

  constructor(result: ParsedFeed, config: FeedConfig) {
    this.displayName = config.displayName;
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
