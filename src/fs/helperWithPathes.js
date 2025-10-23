import path from "path";
import { fileURLToPath } from "url";

export function helperWithPath(folderName, filename = "") {
  let resPath;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    resPath = path.join(__dirname, folderName, filename);

  return resPath;
}

