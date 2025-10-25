import zlib from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from "node:fs"

const decompress = async () => {

  const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const passToArchive = path.join(__dirname,'files','archive.gz');
    const passToFile = path.join(__dirname, 'files', 'fileToCompress.txt')

    const readStream = fs.createReadStream(passToArchive);
    const writeStream = fs.createWriteStream(passToFile);
  
    const decompress = zlib.createGunzip()
  
    readStream.pipe(decompress).pipe(writeStream);
};

await decompress();
