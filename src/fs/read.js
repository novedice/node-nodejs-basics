import { helperWithPath } from "./helperWithPathes.js";
import fsPromises from "fs/promises";

const read = async () => {
  // Write your code here
  try {
    const thePath = await helperWithPath("files", "fileToRead.txt");
    const readedFile = await fsPromises.readFile(thePath, "utf8");
    console.log(readedFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
