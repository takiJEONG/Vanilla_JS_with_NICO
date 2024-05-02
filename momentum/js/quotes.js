const quotes = [
{
  quote: "The way to get started is to quit talking and begin",
  author: "Walt Disney",
},
{
  quote: "Life is what happens when you're busy making other person",
  author: "John Lennon",
},
{
  quote:
  "The world is a book and those who do not travel read only",
  author: "Saint Augustine",
},
{
  quote: "Life is either a daring adventure or nothing at all",
  author: "Hellen Keller",
},
{
  quote: "Just Do it",
  author: "NIKE",
},
{
  quote: "movements that inspires",
  author: "KIA",
},
{
  quote: "Impossible is nothing",
  author: "Adidas",
},
{
  quote: "Find the roads",
  author: "CHEVORET",
},
{
  quote:  "You will never walk alone",
  author: "Liverpool KOP",
},
{
  quote: "Stop running Please",
  author: "Micheal Essien",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quotes[Math.floor(Math.random() * 10)]);