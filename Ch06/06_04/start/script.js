// async functions return a promise and the resolve value of the promise will be whatever you return from the function

const delay = seconds =>
  new Promise((resolve, reject) => {
    if (typeof seconds != "number") {
      reject(new Error("seconds must be a number"));
    }
    setTimeout(resolve, seconds * 1000);
  });

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two seconds");
  await delay(3);
  console.log("three seconds");
};

countToFive();
