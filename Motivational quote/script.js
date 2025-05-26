const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "Success is not final, failure is not fatal.",
  "Push yourself, because no one else is going to do it for you.",
  "You are stronger than you think.",
  "Small steps every day.",
  "Nothing is impossible, the word itself says I'm possible.",
  "It does not matter how slowly you go so long as you do not stop.",
  "It never too late to be what you might have been.",
  "He who conquers himself is the mightiest warrior.",
  "When new day begins, dare to smilegratefully.",
  "When there is darkness, dare to be the first to shine a light."
];

function saveName() {
  const name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name");
    return;
  }

  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("quoteBox").style.display = "block";

  showNewQuote(name);
}

function showNewQuote(name = null) {
  const quoteText = document.getElementById("quoteText");
  const authorName = document.getElementById("authorName");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteText.innerText = quote;

  const userName = name || localStorage.getItem("userName") || "Anonymous";
  localStorage.setItem("userName", userName);
  authorName.innerText = `— ${userName}`;

  quoteText.style.animation = "none";
  void quoteText.offsetWidth;
  quoteText.style.animation = "fadeIn 0.5s ease-in-out";
}

function saveQuote() {
  const quote = document.getElementById("quoteText").innerText;
  let saved = JSON.parse(localStorage.getItem("savedQuotes")) || [];

  if (!saved.includes(quote)) {
    saved.push(quote);
    localStorage.setItem("savedQuotes", JSON.stringify(saved));
    alert("Quote saved!");
  } else {
    alert("Quote already saved!");
  }
}