// Promises

const delay = seconds =>
  new Promise((resolve, reject) => {
    if (typeof seconds != "number") {
      reject(new Error("seconds must be a number"));
    }
    setTimeout(resolve, seconds * 1000);
  });

console.log("Zero seconds");
delay(1).then(() => console.log("1 sec"));
delay(5).then(() => console.log("5 sec"));
delay("one").then(() => console.log("This will not be logged"));
