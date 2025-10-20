import path from "path";
import fsPromises from "fs/promises";
// import { fileURLToPath } from "url";
import { helperWithPath } from "./helperWithPathes.js";

const copy = async () => {
  // Write your code here
  try {
    const oldPath = await helperWithPath("files");
    const newPath = await helperWithPath("files_copy");

    console.log("oldpath", oldPath);
    console.log("newpath", newPath);

    await fsPromises.mkdir(newPath);

    const filesToCopy = await fsPromises.readdir(oldPath);
    console.log("files", filesToCopy);

    // filesToCopy.forEach(async (file) => {
    //   await fsPromises.copyFile(
    //     path.join(oldPath, file),
    //     path.join(newPath, file)
    //   );
    // });
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
