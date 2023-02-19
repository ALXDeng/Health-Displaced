import { mutation } from "./_generated/server";

export default mutation(async ({ db }, name, location, status) => {
        const contact = { name, location, status };
        await db.insert("contacts", contact);
});