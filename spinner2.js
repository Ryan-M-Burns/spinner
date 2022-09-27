let delay = 100;
let spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
while (delay <= 1500) {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      process.stdout.write(spinnerArr[i]);
    }, delay += 200);
  }
}
setTimeout(() => {
  process.stdout.write('     \n');
}, delay += 200);