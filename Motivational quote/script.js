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
  "When there is darkness, dare to be the first to shine a light.",
  "Dream big, start small, act now.",
  "Don’t stop until you’re proud.",
  "Doubt kills more dreams than failure ever will.",
  "Great things never come from comfort zones.",
  "Work hard in silence, let success make the noise.",
  "Don’t watch the clock; do what it does — keep going.",
  "Believe you deserve it, and the universe will serve it.",
  "Discipline is doing what needs to be done, even when you don’t feel like it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Your future is created by what you do today, not tomorrow.",
  "If you get tired, learn to rest, not to quit.",
  "Courage doesn’t always roar; sometimes it’s the quiet voice that says, 'I’ll try again tomorrow.'",
  "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
  "You don’t have to be perfect to be amazing.",
  "Fall seven times, stand up eight.",
  "Do something today that your future self will thank you for.",
  "Keep going — everything you need will come at the right time.",
  "Be stronger than your excuses.",
  "Focus on progress, not perfection.",
  "Don’t be afraid to start over; it’s a chance to build something better this time."
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

function getDayGreeting() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()];

  return `Happy ${dayName}!`;
}


function showNewQuote(name = null) {
  const quoteText = document.getElementById("quoteText");
  const authorName = document.getElementById("authorName");
  const dayGreeting = getDayGreeting();
  
  document.getElementById("dayGreeting").innerText = dayGreeting;


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

