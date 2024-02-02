import path from "path";
import fsPromises from "fs/promises";
import { fileURLToPath } from "url";
import { helperWithPath } from "./helperWithPathes.js";

const create = async () => {
  try {
    // const __filename = fileURLToPath(import.meta.url);
    // const __dirname = path.dirname(__filename);
    // const pathToNewFile = path.join(__dirname, "files", "fresh.txt");
    // console.log("filename", __filename);
    // console.log("DIRNAME", __dirname);
    // console.log("path", pathToNewFile);
    // helperWithPath("fresh.txt");
    await fsPromises.writeFile(
      await helperWithPath("files", "fresh.txt"),
      "I am fresh and young",
      {
        flag: "wx",
      }
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
