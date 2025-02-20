import { createRouter } from "@/lib/create-app.ts";

import * as handlers from "./tasks.handlers.ts";
import * as routes from "./tasks.routes.ts";

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne);

export default router;
