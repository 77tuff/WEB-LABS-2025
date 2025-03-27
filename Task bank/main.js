const comments = [
  {
    name: "jahk",
    text: "a word for lames",
  },
  {
    name: "Butter",
    text: "bread and....",
  },
  {
    name: "Lebron James",
    text: "my goat",
  },
  {
    name: "Shan",
    text: "valorant vct player hardstuck in oamaru",
  },
];

function displayComments(comments) {
  for (comment of comments) {
    document.querySelector("#comments-section").innerHTML += `
            <p>${comment.name} says: ${comment.text}</p>
        `;
  }
}

function getFormData(e) {
  e.preventDefault(); // stop page from refreshing
  console.log(name);
  const name = document.querySelector("#name").value;
  const text = document.querySelector("#text").value;
  const comment = {
      name:name,
      text:text
    }
}

function displayNewComment() {
    for (comment of comments) {
        document.querySelector("#comments-section").innerHTML += `
                <p>${comment.name} says: ${comment.text}</p>
            `;
     }
}

const btn = document.querySelector("button");
btn.addEventListener("click", getFormData);
displayComments(comments);
