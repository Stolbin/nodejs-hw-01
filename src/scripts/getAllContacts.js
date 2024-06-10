import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");

    let contacts = [];
    if (data) {
      contacts = JSON.parse(data);
    }

    return contacts;
  } catch (err) {
    console.error("Error reading the file:", err);
    return [];
  }
};

console.log(await getAllContacts());
