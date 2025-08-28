const skier = (name, sound) => {
  return {
    name,
    sound,
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
};

console.log(skier("Sendy", "woo").name);
skier("Sendy", "woo").powderYell();
