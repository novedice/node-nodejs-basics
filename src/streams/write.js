import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const write = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToWriteFile = path.join(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(pathToWriteFile);

  process.stdin.pipe(writeStream);
}

await write();
