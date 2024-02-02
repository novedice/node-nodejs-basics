import { helperWithPath } from "./helperWithPathes.js";
import fsPromises from "fs/promises";
import path from "path";

const rename = async () => {
  try {
    const thePath = await helperWithPath("files");
    console.log("path", thePath);
    await fsPromises.rename(
      path.join(thePath, "wrongFilename.txt"),
      path.join(thePath, "properFilename.md")
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
