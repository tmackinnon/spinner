//set timer to be increased every loop
let timer = 100;
//make symbols an array that we can loop through
const symbols =['|', '/', '-', '\\', '|', '/', '-', '\\']
//loop through each symbol and print, then increase timer by 200ms
for ( const symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r ${symbol}     `);
  }, timer);
  timer += 200;
}