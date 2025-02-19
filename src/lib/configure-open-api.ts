import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types.js";

import packageJSON from "../../package.json" assert { type: "json" };

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      title: "Test API",
      version: packageJSON.version,
    },
  });

  app.get(
    "/reference",
    apiReference({
      theme: "solarized",
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  );
}
