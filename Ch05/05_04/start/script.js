let person = {
  name: "Angie",
  hobbies: ["bike", "hike", "ski"],
  printHobbies: function () {
    // let _this = this;
    this.hobbies.forEach(hobby => {
      // the arrow function helps to keep "this" in scope
      let string = `${this.name} likes to ${hobby}`;
      console.log(string);
    });
  },
};

person.printHobbies();
