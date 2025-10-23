import { helperWithPath } from "./helperWithPathes.js";
import fsPromises from "fs/promises";

const list = async () => {

  try {
    const thePath = helperWithPath("files");
    const files = await fsPromises.readdir(thePath);
    console.log(files);
  
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();

