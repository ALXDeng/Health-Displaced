import { query } from "./_generated/server";

export default query(async ({ db }) => {
  return await db.query("contacts").filter(q => q.eq(q.field("name"), "Alex"))
  .collect();
});