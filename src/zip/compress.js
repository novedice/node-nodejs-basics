import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import fs from 'node:fs';
import { Transform } from 'node:stream';

const compress = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const pathToFile = path.join(__dirname,'files','fileToCompress.txt');
  const pathToArchive = path.join(__dirname, 'files','archive.gz');

  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(pathToArchive);

  const zlibGzip = zlib.createGzip();

  readStream.pipe(zlibGzip).pipe(writeStream);
};

await compress();
