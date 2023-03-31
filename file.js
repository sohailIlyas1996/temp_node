const file=require('fs')
// console.log(file);

const first=file.readFileSync('./content/first.txt','utf8');

file.writeFileSync('./content/first.txt',"hey ")