import { stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {

  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reverse = chunk.toString().split('').reverse().join('');
      callback(null, reverse);
    }
  })
 process.stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
