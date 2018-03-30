// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// stored quotes and sources in a object and placed the objects in a array
const quotes = [
  {
    quote: "Do not let your hearts be troubled. Trust in God; trust also in me.",
    source: "Jesus Christ"
  },
  {
    quote: "Coincidence is God's way of remaining anonymous.",
    source: "Albert Einstein"
  },
  {
    quote: "We must accept finite disappointment, but never lose infinite hope.",
    source: "Martin Luther King, Jr."
  },
  {
    quote: "Love all, trust a few, do wrong to none.",
    source: "William Shakespeare"
  },
  {
    quote: "Aim at heaven and you will get earth thrown in. Aim at earth and you get neither.",
    source: "C. S. Lewis"
  }
];

// this function will take our array of objects and create a random number then apply that random number to our array index
let getRandomQuote = (arr) => {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

// this function will take our getRandomQuote function with our random array object then build a string with our object data and insert it to the DOM
  let printQuote = (fn) => {
  let callBackQuote = fn(quotes);
  let str = `<p class="quote"> ${callBackQuote.quote} </p> <p class="source"> ${callBackQuote.source} </p>`
  document.getElementById('quote-box').innerHTML = str;
}

// this will call our constucted function every 10 seconds
setInterval(function(){printQuote(getRandomQuote)}, 10000);

/* side note this only works if i place the printQuote function in another function
inside the setInterval method i believe this is a closure problem but will come back to it later
*/

// this will add a click event listener to the button with the loadQuote id and will call the constucted printQuote function every time the button is clicked
document.getElementById('loadQuote').addEventListener("click", function(){printQuote(getRandomQuote)}, false);
