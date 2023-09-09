const quote = document.querySelector('.quote');
const person = document.querySelector('.person');
const newQuote = document.querySelector('.new-quote');

const quotes = [{quote: "If you look at what you have in life, you will always have more. if you look at what you dont have, you will never have enough",
    person:"Ofrey Wilfrey"}, {quote: "It doesnt matter how slow you are, as long as you dont stop",
person: "Conducious"},
{quote:"Our lives begins to end the day we become silent about things that matter",
person: "Martin Luther King, Jr."}, {
    quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck",
    person: "Dalai Lama"} , {
        quote: "The journey of a thousand miles begins with a step",
        person: "Lao Tsu"
    },
{quote: " At his best, man is the noblest of all animals, seperated from law and justice, he is the worst",
person: "Aristotle"},
{quote: "Your time is limited, so dont waste it living someone's else life.",
person: "Steve Job"}];

newQuote.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})