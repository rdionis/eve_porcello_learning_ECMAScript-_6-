let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");

books.add("War and Peace"); // won't add it, since every item must be unique

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
console.log(books);

books.map(item => console.log(item)); // returns an error: map() isn't available for sets

console.log("has Oliver twist", books.has("Oliver Twist"));
