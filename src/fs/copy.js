import path from "path";
import fsPromises from "fs/promises";
import { helperWithPath } from "./helperWithPathes.js";

const copy = async () => {
  // Write your code here
  try {
   
    const oldPath = helperWithPath("files");
    const newPath = helperWithPath("files_copy");

    const filesToCopy = await fsPromises.readdir(oldPath);

    await fsPromises.mkdir(newPath);

    for (let file of filesToCopy) {
      await fsPromises.copyFile(
        path.join(oldPath, file),
        path.join(newPath, file)
      );
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
