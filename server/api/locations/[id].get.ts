import { and, eq } from 'drizzle-orm';
import { auth } from '~/lib/auth';
import db from '~/lib/db';
import { location, locationLog, locationLogImage } from '~/lib/db/schema';

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({ headers: event.headers });
  if (!session?.user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }

  const id = Number(event.context.params?.id);
  if (Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid id' });
  }

  const [loc] = await db
    .select()
    .from(location)
    .where(eq(location.id, id));

  if (!loc || loc.userId !== Number(session.user.id)) {
    throw createError({ statusCode: 404, statusMessage: 'Location not found' });
  }

  const images = await db
    .select({ id: locationLogImage.id, key: locationLogImage.key })
    .from(locationLogImage)
    .innerJoin(locationLog, eq(locationLogImage.locationLogId, locationLog.id))
    .where(
      and(
        eq(locationLog.locationId, id),
        eq(locationLogImage.userId, Number(session.user.id))
      )
    );

  return { ...loc, images };
});
