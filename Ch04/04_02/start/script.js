const daytime = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
};

const nightime = "mac and cheese";

const backpackingMeals = {
  ...daytime,
  nightime,
};

console.log(backpackingMeals);
