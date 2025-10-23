import fsPromises from "fs/promises";
import { helperWithPath } from "./helperWithPathes.js";

const create = async () => {
  try {
    await fsPromises.writeFile(
       helperWithPath("files", "fresh.txt"),
      "I am fresh and young",
      {
        flag: "wx",
      }
    );
  } catch (error) {
    throw new Error( "FS operation failed");
  }
};

await create();
