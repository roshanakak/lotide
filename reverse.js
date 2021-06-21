const args = process.argv;
for (let j = 2; j < args.length; j++) {
  let output = '';
  for (let i = args[j].length - 1; i >= 0; i--) {
    output += args[j][i];
  }
  console.log(output);
}


