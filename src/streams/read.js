import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stdout } from 'node:process';

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToReadStream = path.join(__dirname, 'files', 'fileToRead.txt');

  const readStream = fs.createReadStream(pathToReadStream).pipe(process.stdout);
 
  process.stdin.pipe(stdout);

}

await read();
