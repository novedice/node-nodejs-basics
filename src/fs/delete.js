import path from "path";
import { helperWithPath } from "./helperWithPathes.js";
import fsPromises from "fs/promises";

const remove = async () => {
  try {
    const thePath = await helperWithPath("files", "fileToRemove.txt");
    await fsPromises.rm(thePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
