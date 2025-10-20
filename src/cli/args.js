const parseArgs = () => {
  // Write your code here
  const args = process.argv.slice(2);
  const printing = args.reduce((prevVal, curVal, curIndex, array) => {
    let result;
    if (curIndex % 2 === 0) {
      result = `${curVal.slice(2)} is `;
    } else {
      result = curVal;
      if (curIndex !== array.length - 1) {
        result = `${result}, `;
      }
    }
    return prevVal + result;
  }, "");
  console.log("printing:", printing);
};

parseArgs();
