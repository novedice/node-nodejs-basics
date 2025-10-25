import {fileURLToPath} from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';

const calculateHash = async () => {
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const thePass = path.join(__dirname, 'files','fileToCalculateHashFor.txt');

  const readStream = fs.createReadStream(thePass);
  const hash = crypto.createHash('sha256');

  const hashResult = readStream.pipe(hash);
  console.log(hashResult.digest('hex'));

};

await calculateHash();
