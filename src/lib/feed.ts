import { Output, Item as IItem } from "rss-parser";
import Item from "./item";

export interface FeedConfig {
  id: string;
  displayName: string;
  url: string;
}

export default class Feed {
  public displayName: string;
  public items: Item[];

  constructor(result: Output<IItem>, config: FeedConfig) {
    this.displayName = config.displayName;
    this.items = result.items.map((item) => new Item(item));
  }
}
