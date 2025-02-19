import type { AppRouteHandler } from "@/lib/types.ts";

import db from "@/db/index.ts";
import { tasks } from "@/db/schema.ts";

import type { CreateRoute, ListRoute } from "./tasks.routes.ts";

export const list: AppRouteHandler<ListRoute> = async (c) => {
  const tasks = await db.query.tasks.findMany();
  return c.json(tasks);
};

export const create: AppRouteHandler<CreateRoute> = async (c) => {
  const task = c.req.valid("json");
  const [inserted] = await db.insert(tasks).values(task).returning();
  return c.json(inserted);
};
