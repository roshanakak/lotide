const args = process.argv;
let vowels = ['a', 'e', 'i', 'o', 'u'];
let output = '';

for (let j = 2; j < args.length; j++) {
  
  if (vowels.includes(args[j][0])) {
    output += `${args[j].slice(1)}${args[j][0]}ay `;
  } else if (!vowels.includes(args[j][0]) && vowels.includes(args[j][1])) {
    output += `${args[j].slice(1)}${args[j][0]}ay `;
  } else {
    let vIndex = 1;
    for (let i = 0; i < args[j].length - 1; i++) {
      if (vowels.includes(args[i])) {
        vIndex = i;
        break;
      }
    }
    output += `${args[j].slice(vIndex)}${args[j].slice(0, vIndex)}ay `;
  }

}
console.log(output);


