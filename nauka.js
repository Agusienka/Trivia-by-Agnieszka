document.getElementById("name").onclick = function(){
    const name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}







// Questions will be asked
const Questions = [{
    id: 0,
    q: "Jaki jest normalny poziom pH krwi człowieka?",
    a: [{ text: "7.40", isCorrect: true },
        { text: "6.0", isCorrect: false },
        { text: "13.5", isCorrect: false },
        { text: "8.7", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Jaki jest symbol chemiczny soli?",
    a: [{ text: "S", isCorrect: false, },
        { text: "NaCl", isCorrect: true },
        { text: "K", isCorrect: false },
        { text: "Cl", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Problemy z czym powodują zawroty głowy?",
    a: [{ text: "Oczami", isCorrect: false, },
        { text: "Nosem", isCorrect: false },
        { text: "Kostką", isCorrect: false },
        { text: "Uszami", isCorrect: true }
    ]

},

{
    id: 3,
    q: "Dźwięk porusza się z różną prędkością przechodząc przez różne materiały. Przez co przejdzie najszybciej??",
    a: [{ text: "Stal", isCorrect: true, },
        { text: "Gumę", isCorrect: false },
        { text: "Wodę", isCorrect: false },
        { text: "Powietrze", isCorrect: false }
    ]

},

{
    id: 4,
    q: "Suchoty to dawna nazwa: ? ",
    a: [{ text: "Dżumy", isCorrect: false, },
        { text: "Cholery", isCorrect: false },
        { text: "Ospy", isCorrect: false },
        { text: "Gruźlicy", isCorrect: true }
    ]

},
{
    id: 5,
    q: "Kto podczas kąpieli dokonał odkrycia, że przedmioty zanurzone w wodzie pozornie tracą na wadze tyle, ile waży wyparta przez nie woda i podekscytowany swoim odkryciem wybiegł na ulicę krzycząc: 'Heureka!'?",
    a: [{ text: "Archimedes", isCorrect: true, },
        { text: "Galileusz", isCorrect: false },
        { text: "Isac Newton", isCorrect: false },
        { text: "Sokrates", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Pustynia Atacama, należąca do najsuchszych obszarów na świecie, leży w?",
    a: [{ text: "Chile", isCorrect: true, },
        { text: "Maroko", isCorrect: false},
        { text: "Chinach", isCorrect: false },
        { text: "Stanach Zjednoczonych", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Jony naładowane ujemnie to:?",
    a: [{ text: "Protony", isCorrect: false, },
        { text: "Aniony", isCorrect: true },
        { text: "Elektrony", isCorrect: false },
        { text: "Kationy", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Which prefix is often used with scientific terms to indicate that something is the same, equal or constant?",
    a: [{ text: "Iso", isCorrect: true, },
        { text: "Mega", isCorrect: false },
        { text: "Meta", isCorrect: false },
        { text: "Quasi", isCorrect: false }
    ]

},
{
    id: 9,
    q: "The study of phenomena at very low temperatures is called?",
    a: [{ text: "Heat transfer", isCorrect: false, },
        { text: "Morphology", isCorrect: false },
        { text: "Crystallography", isCorrect: false },
        { text: "Cryogenics", isCorrect: true }
    ]

},
{
    id: 10,
    q: "What famous scientist and inventor participated in the invention of the Aqua-Lung?",
    a: [{ text: "Thomas Edison", isCorrect: false, },
        { text: "Isaac Newton", isCorrect: false },
        { text: "Leonardo da Vinci", isCorrect: false },
        { text: "Jacques Cousteau", isCorrect: true }
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

/*const score = 0;
const score = document.getElementById('evaluate').score;
 function scoreboard() {
    if (selected == "true") { text: "You earned a Point!",
    score = score + 1
    alert("Score: " + score);
 }
 else if(selected == false){
    score = score + 0;
 } */

// Computes score and returns a paragraph element to be displayed





















// add fun category names to each html
// add sound effects for correct and wrong
// maybe music?
// more to come