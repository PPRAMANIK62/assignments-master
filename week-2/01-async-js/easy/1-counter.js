let counter = 0;

console.log("counter runs for 10s");

setInterval(function () {
  counter += 1;
  console.log("counter:", counter);
  
  if (counter == 10) {
    clearInterval(this);
  }
}, 1000);
