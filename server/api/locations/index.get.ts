import { eq } from "drizzle-orm";

import { auth } from "~/lib/auth";
import db from "~/lib/db";
import { location } from "~/lib/db/schema";

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({ headers: event.headers });
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const locations = await db
    .select()
    .from(location)
    .where(eq(location.userId, Number(session.user.id)));

  return locations;
});
