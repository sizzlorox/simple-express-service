import * as path from "path";
import * as fs from "fs/promises";

import { Application } from "express";

export default async function bootstrap(app: Application): Promise<void> {
  const normalizedPath = path.join(__dirname, "../handlers");
  const files = await fs.readdir(normalizedPath);
  for (const file of files) {
    if (file !== "index.ts") {
      const tsFile = await import(`../handlers`);
      const { router } = await tsFile.default();
      app.use("/", router);
    }
  }
}
