for (let letter of "JavaScript") {
  console.log(letter);
}

let topics = ["JavaScript", "Node", "CSS"];

for (let topic of topics) {
  console.log(topic);
}

let otherTopics = new Map();
otherTopics.set("HTML", "/topic/html");
otherTopics.set("CSS", "/topic/css");
otherTopics.set("JavaScript", "/topic/javascript");

for (let otherTopic of otherTopics.keys()) {
  console.log(otherTopic);
}

for (let route of otherTopics.values()) {
  console.log(`The course description can be found at ${route}`);
}

for (let otherTopic of otherTopics.entries()) {
  console.log(otherTopic);
}
