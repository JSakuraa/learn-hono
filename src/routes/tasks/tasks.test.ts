import { testClient } from "hono/testing";
import { describe, expectTypeOf, it } from "vitest";

import createApp, { createTestApp } from "@/lib/create-app.ts";

import router from "./tasks.index.ts";

describe("tasks list", () => {
  it("responds with an array", async () => {
    const testRouter = createTestApp(router);
    const response = await testRouter.request("/tasks");
    const result = await response.json();
    // @ts-expect-error ignore type error
    expectTypeOf(result).toBeArray();
  });

  it("responds with an array again", async () => {
    const client = testClient(createApp().route("/", router));
    const response = await client.tasks.$get();
    const json = await response.json();
    expectTypeOf(json).toBeArray();
  });
});
