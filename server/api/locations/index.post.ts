import { z } from "zod";

import { auth } from "~/lib/auth";
import db from "~/lib/db";
import { location } from "~/lib/db/schema";
import slugify from "~/lib/utils/slugify";

const LocationSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  lat: z.number().min(-90).max(90),
  long: z.number().min(-180).max(180),
});

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({ headers: event.headers });
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const body = await readBody(event);
  const result = LocationSchema.safeParse(body);
  if (!result.success) {
    throw createError({ statusCode: 400, statusMessage: "Invalid data" });
  }

  const data = result.data;

  const [newLocation] = await db
    .insert(location)
    .values({
      name: data.name,
      slug: slugify(data.name),
      description: data.description,
      lat: data.lat,
      long: data.long,
      userId: session.user.id,
    })
    .returning();

  return newLocation;
});
