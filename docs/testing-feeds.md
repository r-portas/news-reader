# Testing Feeds

Some feeds don't implement the RSS spec consistently, so its useful to see the raw JSON output decoded by `rss-parser`, this can be done by calling the `/api/feeds` endpoint with a `url` field in the request body.

The easiest way to do this is via the REST Client extension for VSCode (its listed as a workspace recommendation), the `docs/api` directory contains a set of requests, open one of the `.http` files in VSCode then press "Send Request" at the top.
