import path from "path";
import { fileURLToPath } from "url";

export async function helperWithPath(filename) {
  let resPath;
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    resPath = path.join(__dirname, "files", filename);
    console.log("filename", __filename);
    console.log("DIRNAME", __dirname);
    console.log("path", resPath);
  } catch (error) {
    console.log(error.error);
  }
  return resPath;
}

// await helperWithPath("new.txt");
