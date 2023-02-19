import { mutation } from "./_generated/server";

export default mutation(async ({ db }, Name, Location, Insurance, Last_Checkup, Provider, Issues, Notes) => {
  const message = {Name, Location, Insurance, Last_Checkup, Provider, Issues, Notes};
  await db.insert("contacts", message);
});
