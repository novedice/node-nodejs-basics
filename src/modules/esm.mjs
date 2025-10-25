import path from 'node:path';
import {release, version} from 'node:os';
import http from 'node:http';
import moduleA from './files/a.json' with {type: 'json'};
import moduleB from './files/b.json' with {type: 'json'};

const random = Math.random();

const unknownObject = random > 0.5 ? moduleA : moduleB;

const __filename = import.meta.filename;
const __dirname = path.dirname(__filename);


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = http.createServer((req, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer
}

