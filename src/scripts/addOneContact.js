import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";
import createFakeContact from "../utils/createFakeContact.js";

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");
    let contacts = [];
    if (data) {
      contacts = JSON.parse(data);
    }

    const newContact = createFakeContact();
    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf8");
    console.log("One contact successfully added.");
  } catch (err) {
    console.error("Error processing the file:", err);
  }
};

await addOneContact();
