let seconds = 0;
let minutes = 0;
let hours = 0;
let bool = false; // false : AM

function clock() {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }
  // 24 hr format
  //   if (hours > 23) hours = 0;
  
  //   console.log(
  //     `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
  //       seconds < 10 ? 0 : ""
  //     }${seconds}`
  //   );

  // 12 hr format
  if (hours > 11) {
    hours = 0;
    bool = !bool;
  }
  console.log(
    `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
      seconds < 10 ? 0 : ""
    }${seconds} ${bool ? "PM" : "AM"}`
  );
}

setInterval(clock, 1000);
