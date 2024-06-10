import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf8");
    const contacts = JSON.parse(data);
    if (contacts.length === 0) {
      console.log("No contacts to remove.");
      return;
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf8");
    console.log("The last contact has been removed.");
  } catch (err) {
    console.error("Error processing the file:", err);
  }
};
if (import.meta.url === new URL(import.meta.url).href) {
  removeLastContact();
}
