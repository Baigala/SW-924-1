// Promise - Амлалт
// Амжилттай биелвэл ажилладаг then функцтэй.
// Амжилтгүй болвол ажилладаг catch функцтэй.
// asynchronously
// Хэрэглээ: Энэ даалгаварыг хийх гэж оролдож үзээд чадвал ингэнэ, чадахгүй бол тэгнэ гэдгээ амла.
// Promise төлөвүүд: pending(хүлээгдэж байгаа), resolved(гүйцэтгэсэн), rejected(гүйцэтгэж чадсангүй);

// Promise uusgeh butets.
let p = new Promise((resolved, rejected) => {
  let num = 1 + 3;
  if (num == 2) {
    resolved("amjilttai.");
  } else {
    rejected("amjiltgui.");
  }
});

// Uusgesen promise-oo ajillaluulj bga.
p.then((message) => {
  console.log("then function ajillalaa. " + message);
}).catch((error) => {
  console.log("catch function ajillalaa. " + error);
});

//////////
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

function createPost(post) {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      posts.push(post);
      let error = false;
      if (error == false) {
        resolved("amjilttai.");
      } else {
        rejected("amjiltgui bolloo.");
      }
    });
  }, 2000);
}

// createPost({ title: "Post three", content: "Post three content" })
//   .then((message) => console.log(message))
//   .then(getPosts)
//   .catch((error) => console.log(error));

// Async / Await
async function init() {
  await createPost({ title: "Post Four", body: "This is post Four" });
  getPosts();
}

init();
