// Энгийн export, default export байдлаар нэг file дотор ганц зүйлийг export хийж болдог.
// import P from "./person.js";
// import { num as number, printAge } from "./person.js";
// console.log(number);
// const p1 = new P("Sid", 25);
// console.log(p1.printName());
// printAge(p1);

// fetch
// catch ajilladaggui.
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error("adfasdfasdf");
    } else {
      return response.json();
    }
  })
  .then((result) => {
    result.forEach((e) => {
      document.body.insertAdjacentHTML(
        "afterbegin",
        `<h1 id="name">${e.name}</h1>`
      );
    });
  });
