let getSpacePeople = () =>
  // fetch is a function that works natively in the browser / is built in to every single browser
  fetch("http://api.open-notify.org/astros.json").then(res => res.json());

// getSpacePeople().then(data => console.log(data)); //this can be refactored into the code in the line below:
// getSpacePeople().then(console.log);

let spaceNames = () =>
  getSpacePeople()
    .then(json => json.people)
    .then(people => people.map(p => p.name))
    .then(names => names.join(", "));

spaceNames().then(console.log);

// fetch returns a promise – we are still using promises under the hood
