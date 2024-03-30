// Here we get all components from HTML doc
const quoteBtn = document.getElementById('new-quote');
const textSpace = document.getElementById('text');
const authorSpace = document.getElementById('author');
const tweetBtn = document.getElementById("tweet-quote");
const tumblrBtn = document.getElementById("tumblr-quote");

// Here we'll write all the quotes and authors, and put them in an array
let quotes = [
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "All that glitters is not gold.",
        author: "William Shakespeare"
    }
]

// Here we create all the necessary functions for the program to run
function changeColor() {
    // Generate a random color in hex format
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the transition property to fade-out the current background color
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.transition = 'background-color 1s ease';
    document.body.style.transition = 'background-color 1s ease';
    tweetBtn.style.transition = 'background-color 1s ease';
    tumblrBtn.style.transition = 'background-color 1s ease';
    quoteBtn.style.transition = 'background-color 1s ease';

    // Set the background color of the body to the new color
    setTimeout(() => {
        document.body.style.backgroundColor = randomColor;
        document.body.style.color = randomColor;
        tweetBtn.style.backgroundColor = randomColor;
        tumblrBtn.style.backgroundColor = randomColor;
        quoteBtn.style.backgroundColor = randomColor;
    }, 10);
}

function getQuote() {
  // Store the current quote and author
    let currentQuote = document.getElementById("text").innerText;
    let currentAuthor = document.getElementById("author").innerText;

    // Generate random index
    let randomIndex = Math.floor(Math.random() * quotes.length);

    // Display new quote and author
    while (quotes[randomIndex].quote === currentQuote && quotes[randomIndex].author === currentAuthor) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }
    textSpace.innerText = `${quotes[randomIndex].quote}`;
    authorSpace.innerText = `-${quotes[randomIndex].author}`;
}

// Here we run the functions we previously made
quoteBtn.addEventListener('click', function () {
    getQuote();
    changeColor();
});

window.onload = function () {
    getQuote();
    changeColor();
};
