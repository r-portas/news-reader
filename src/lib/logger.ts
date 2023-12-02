import debug from "debug";

export default function logger(namespace: string) {
  return debug(`news-reader:${namespace}`);
}
