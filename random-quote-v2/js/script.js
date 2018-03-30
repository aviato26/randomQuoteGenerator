// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

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

let getRandomQuote = (arr) => {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

  let printQuote = (fn) => {
  let callBackQuote = fn(quotes);
  let str = `<p class="quote"> ${callBackQuote.quote} </p> <p class="source"> ${callBackQuote.source} </p>`
  document.getElementById('quote-box').innerHTML = str;
}
