const url = "https://api.quotable.io/random";

// DOM selection
const btn = document.querySelector("button");
const quoteDisplay = document.querySelector(".quote-display h3");
const author = document.querySelector(".author");

async function getQuote() {
  quoteDisplay.innerText = "Loading....";
  author.innerText = " ";
  const res = await fetch(url);
  let data = await res.json();
  const quotes = data.content;
  const authorName = data.author;
  quoteDisplay.innerText = quotes;
  author.innerText = authorName;
}

btn.addEventListener("click", () => {
  getQuote();
});
