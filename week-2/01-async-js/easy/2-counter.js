let counter = 0;

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    counter++;
    console.log("counter:", counter);
  }, i*1000);
}
