// asynchronous vs synchronous(js)
// console.log("hi");
// setTimeout(() => {
//   console.log("Gambaa");
// }, 1000);
// console.log("how r u?");

// callback
let posts = [
  { title: "Post one", content: "Post one content" },
  { title: "Post two", content: "Post two content" },
];
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post 3", content: "Content 3" }, getPosts);

// Гэрт 1 callback jishee bodoj oloh.
