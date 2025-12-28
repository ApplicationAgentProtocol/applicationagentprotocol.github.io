import { sql } from "drizzle-orm";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import * as z from "zod";
import { db } from "@/libs/DB";
import { logger } from "@/libs/Logger";
import { counterSchema } from "@/models/Schema";
import { CounterValidation } from "@/validations/CounterValidation";

/**
 * Non-locale API route used by the Counter demo.
 *
 * Why this exists:
 * - `output: "export"` (GitHub Pages) does not work with API routes under dynamic segments like `/[locale]/...`.
 * - Keeping the API at `/api/counter` avoids locale params and makes the export pipeline consistent.
 *
 * Note:
 * - GitHub Pages is static hosting and cannot execute this API at runtime.
 * - This route is still useful for local development, CI, and any server deployment.
 * - If you deploy purely to GitHub Pages, the Counter page should be adjusted to avoid calling this API.
 */
export const PUT = async (request: Request) => {
  const json = await request.json();
  const parse = CounterValidation.safeParse(json);

  if (!parse.success) {
    return NextResponse.json(z.treeifyError(parse.error), { status: 422 });
  }

  // `x-e2e-random-id` is used for end-to-end testing to make isolated requests
  // The default value is 0 when there is no `x-e2e-random-id` header
  const id = Number((await headers()).get("x-e2e-random-id")) || 0;

  const count = await db
    .insert(counterSchema)
    .values({ id, count: parse.data.increment })
    .onConflictDoUpdate({
      target: counterSchema.id,
      set: { count: sql`${counterSchema.count} + ${parse.data.increment}` },
    })
    .returning();

  logger.info("Counter has been incremented");

  return NextResponse.json({
    count: count[0]?.count,
  });
};
