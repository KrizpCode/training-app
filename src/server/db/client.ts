// src/server/db/client.ts
import { PrismaClient } from "@prisma/client";
import { serverEnvironment } from "../../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      serverEnvironment.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (serverEnvironment.NODE_ENV !== "production") {
  global.prisma = prisma;
}
