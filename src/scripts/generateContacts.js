import fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import createFakeContact from "../utils/createFakeContact.js";

export const generateContacts = async (number) => {
  try {
    let data = await fs.readFile(PATH_DB, "utf8");

    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf8");
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);
