const parseEnv = () => {
  // Write your code here
  const envVar = Object.entries(process.env);
  const filteredVar = envVar.filter(([key, val]) => key.includes("RSS_"));
  for (let variable of filteredVar) {
    console.log(`RSS_name${filteredVar.indexOf(variable) + 1}=${variable[1]}`);
  }
};

parseEnv();
