import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  const sessionState = useState("session");
  if (sessionState.value === undefined) {
    sessionState.value = await auth.api.getSession({ headers: event.headers });
  }
  event.context.session = sessionState.value;
});
