import * as path from "path";
import * as fs from "fs/promises";

import { IRouter, Router } from "express";

export default async function loadIn(): Promise<{
  router: IRouter;
}> {
  const r = Router({ mergeParams: true });
  const normalizedPath = path.join(__dirname);
  const files = await fs.readdir(normalizedPath);
  for (const file of files) {
    if (file !== "index.ts") {
      const tsFile = await import(`./${file}`);
      const { router, prefix } = await tsFile.default();
      r.use(`/${prefix}`, router);
    }
  }

  return {
    router: r,
  };
}
