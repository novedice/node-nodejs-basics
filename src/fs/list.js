import { helperWithPath } from "./helperWithPathes.js";
import fsPromises from "fs/promises";

const list = async () => {
  // Write your code here
  try {
    const thePath = await helperWithPath("files");
    const files = await fsPromises.readdir(thePath);
    // console.log(files);
    for (let file of files) {
      console.log(file);
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
