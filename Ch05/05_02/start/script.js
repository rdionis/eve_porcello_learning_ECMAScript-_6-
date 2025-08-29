function add(x, y) {
  console.log(x + y);
}

add(); // this will return NaN

function addAgain(x = 5, y = 4) {
  console.log(x + y);
}

addAgain(); // will take the default parameters as arguments
addAgain(1, 2); // the arguments passed will override the default parameters

function haveFun(activityName = "swimming", time = 5) {
  console.log(`Today, I wil go ${activityName} for ${time} hours.`);
}

haveFun("biking", "2,5");
haveFun(); // will return the default parameters
haveFun("dancing"); // will return the argument for the first parameter and the default for the second
