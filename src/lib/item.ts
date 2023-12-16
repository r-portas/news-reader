import { Item as IItem } from "rss-parser";

export default class Item {
  public id?: string;
  public title?: string;
  public summary?: string;
  public previewImage?: string;
  public published?: Date;
  public categories: string[];
  public link?: string;

  constructor(raw: IItem) {
    this.id = raw.guid;
    this.title = raw.title;
    this.summary = raw.contentSnippet;
    this.categories = [];
    if (raw.categories) {
      for (const category of raw.categories) {
        switch (typeof category) {
          case "string":
            this.categories.push(category);
            break;
          case "object":
            // The Guardian's categories are objects with a "_" key
            if (category["_"]) {
              this.categories.push(category["_"]);
            }
            break;
        }
      }
    }
    this.link = raw.link;
    this.previewImage = raw.enclosure?.url;

    if (raw.isoDate) {
      this.published = new Date(raw.isoDate);
    }
  }
}
