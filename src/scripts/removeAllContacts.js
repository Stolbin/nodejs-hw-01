import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), "utf8");
    console.log("All contacts have been removed.");
  } catch (err) {
    console.error("Error writing to the file:", err);
  }
};

await removeAllContacts();
