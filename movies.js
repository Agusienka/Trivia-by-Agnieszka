// Questions will be asked
    document.getElementById("name").onclick = function(){
    const name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}


const Questions = [{
    id: 0,
    q: "Co oznacza zielony kod w filmie 'Matrix'?",
    a: [{ text: "Japoński przepis na Sushi", isCorrect: true },
        { text: "Przepis na kopytka", isCorrect: false },
        { text: "Poezja Japońska", isCorrect: false },
        { text: "Przepis babci Agnieszki", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Gdzie były filmowane filmy z seri 'Władca Pierścieni?",
    a: [{ text: "Irlandia", isCorrect: false, },
        { text: "Islandia", isCorrect: false },
        { text: "Nowa Zelandia", isCorrect: true },
        { text: "Australia", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Jakie nazwisko nosi bohater filmu'Rocky'?",
    a: [{ text: "Nolan", isCorrect: false, },
        { text: "Balboa", isCorrect: true },
        { text: "Gump", isCorrect: false },
        { text: "", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Which actor plays Private Ryan in Saving Private Ryan?",
    a: [{ text: "Tom Hanks", isCorrect: false, },
        { text: "Vin Disel", isCorrect: false },
        { text: "Edward Burns", isCorrect: false },
        { text: "Matt Damon", isCorrect: true }
    ]

},

{
    id: 4,
    q: "What is the highest-grossing movie of all time?",
    a: [{ text: "Titanic", isCorrect: false, },
        { text: "Avatar", isCorrect: true },
        { text: "Avengers: Endgame", isCorrect: false },
        { text: "Star Wars: The Force Awakens", isCorrect: false }
    ]

},
{
    id: 5,
    q: "Which is the first movie in the Bourne franchise?",
    a: [{ text: "The Bourne Identity", isCorrect: true, },
        { text: "The Bourne Supremacy ", isCorrect: false },
        { text: "Jason Bourne", isCorrect: false },
        { text: "The Bourne Legacy", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Jack and Rose are the main characters from which film?",
    a: [{ text: "Lost In Translation", isCorrect: false, },
        { text: "Punch-Drunk Love", isCorrect: false },
        { text: "The Titanic", isCorrect: true },
        { text: "The Way We Were", isCorrect: false }
    ]

},
{
    id: 7,
    q: "In 'Snow White and the Seven Dwarfs' what did the seven dwarfs do for a job?",
    a: [{ text: "Teachers", isCorrect: false, },
        { text: "Miners", isCorrect: true },
        { text: "Maids", isCorrect: false },
        { text: "Cooks", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Which movie did Tom Hanks NOT star in?",
    a: [{ text: "Apollo 13", isCorrect: false, },
        { text: "Forest Gump", isCorrect: false },
        { text: "Groundhog Day", isCorrect: true },
        { text: "The Green Mile", isCorrect: false }
    ]

},
{
    id: 9,
    q: "What is the film crew's chief electrician called?",
    a: [{ text: "Big L.", isCorrect: false, },
        { text: "Gaffer", isCorrect: true },
        { text: "Sparks", isCorrect: false },
        { text: "The wire man", isisCorrect: false }
    ]

},
{
    id: 10,
    q: "Which actor plays James Bond in Skyfall and Casino Royale?",
    a: [{ text: "Daniel Craig", isCorrect: true, },
        { text: "Pierce Brosnan", isCorrect: false },
        { text: "Sean Connery", isCorrect: false },
        { text: "Timothy Dalton", isCorrect: false }
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
const evaluate = document.getElementsByClassName("option-container");

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