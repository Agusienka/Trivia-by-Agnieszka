document.getElementById("name").onclick = function(){
    const name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}




// Questions will be asked
const Questions = [{
    id: 0,
    q: "To consider a band as a Big Band what is the minimum number of musicians to be needed?",
    a: [{ text: "11", isCorrect: false },
        { text: "21", isCorrect: false },
        { text: "12", isCorrect: false },
        { text: "10", isCorrect: true }
    ]

},
{
    id: 1,
    q: "Who recorded “Groove is in the Heart?",
    a: [{ text: "Q-Tip", isCorrect: false, },
        { text: "Deee-Lite", isCorrect: true },
        { text: "Technotronic", isCorrect: false },
        { text: "The B-52’s", isCorrect: false }
    ]

},
{
    id: 2,
    q: "The musical composition “Rhapsody in Blue was written by whom?",
    a: [{ text: "Leonard Bernstein", isCorrect: false, },
        { text: "Cole Porter", isCorrect: false },
        { text: "Claude Debussy", isCorrect: false },
        { text: "George Gershwin", isCorrect: true }
    ]

},

{
    id: 3,
    q: "The first hispanic to be inducted into the Rock and Roll Hall of Fame is whom?",
    a: [{ text: "Carlos Santana", isCorrect: true, },
        { text: "Cindy Blackman", isCorrect: false },
        { text: "Rob Thomas", isCorrect: false },
        { text: "John Lee Hooker", isCorrect: false }
    ]

},

{
    id: 4,
    q: "Which pop singer’s hits include Roar and Teenage Dream?",
    a: [{ text: "Madonna", isCorrect: false, },
        { text: "Britney Spears", isCorrect: false },
        { text: "Katy Perry", isCorrect: true },
        { text: "Ariana Grande", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which American singer featured on the Mark Ronson smash hit single Uptown Funk?",
    a: [{ text: "Pharrell Williams", isCorrect: false, },
        { text: "Justin Timberlake", isCorrect: false },
        { text: "Usher", isCorrect: false },
        { text: "Bruno Mars", isCorrect: true }
    ]

},
{
    id: 6,
    q: "Of which group was Gwen Stefani the lead singer?",
    a: [{ text: "Pussycat Dolls", isCorrect: false, },
        { text: "TLC", isCorrect: false },
        { text: "The Bangles", isCorrect: false },
        { text: "No Doubt", isCorrect: true }
    ]

},
{
    id: 7,
    q: "According to Cyndi Lauper what do girls just want to do?",
    a: [{ text: "Settle Down", isCorrect: false, },
        { text: "Have Fun", isCorrect: true },
        { text: "Dance", isCorrect: false },
        { text: "Kiss Boys", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Of which boy band was Donnie Wahlberg a member?",
    a: [{ text: "NSYNC", isCorrect: false, },
        { text: "Boyz II Men", isCorrect: false },
        { text: "New Kids on the Block", isCorrect: true },
        { text: "Backstreet Boys", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Who was the youngest Beatle?",
    a: [{ text: "Ringo Starr", isCorrect: false, },
        { text: "John Lennon", isCorrect: false },
        { text: "Paul McCartney", isCorrect: false },
        { text: "George Harrison", isisCorrect: true }
    ]

},
{
    id: 10,
    q: "The Friends theme song, I will Be There For You, was recorded by which band?",
    a: [{ text: "Hootie & The Blowfish", isCorrect: false, },
        { text: "The Rembrandts", isCorrect: true },
        { text: "Goo Goo Dolls", isCorrect: false },
        { text: "Ace Of Base", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})



// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "Correct!";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "Wrong!";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}


// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 10) {
    id++;
    iterate(id);
    console.log(id);
}

})



// add fun category names to each html
// add sound effects for correct and wrong
// maybe music?
// more to come