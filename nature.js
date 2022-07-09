









const Questions = [{
    id: 0,
    q: "How many critically endangered Sumatran orangutans are there left in the wild?",
    a: [{ text: "Fewer than 50,000", isCorrect: false },
    { text: "Fewer than 45,000", isCorrect: false },
    { text: "Fewer than 20,000", isCorrect: false },
    { text: "Fewer than 14,000", isCorrect: true }
    ]

},
{
    id: 1,
    q: "What is the main threat to the western lowland gorilla?",
    a: [{ text: "Illegal poaching for bush meat", isCorrect: true, },
    { text: "Habitat loss", isCorrect: false },
    { text: "Being killed for medicinal purposes", isCorrect: false },
    { text: "Climate change", isCorrect: false }
    ]

},
{
    id: 2,
    q: "What is the largest land predator species?",
    a: [{ text: "Lion", isCorrect: false, },
    { text: "Grizzly bear", isCorrect: false },
    { text: "Polar bear", isCorrect: true },
    { text: "Alligator", isCorrect: false }
    ]

},

{
    id: 3,
    q: "In which continent would you find the Mount Kilimanjaro?",
    a: [{ text: "Asia", isCorrect: false, },
    { text: "Africa", isCorrect: true },
    { text: "Europe", isCorrect: false },
    { text: "Antarctica", isCorrect: false }
    ]

},

{
    id: 4,
    q: "What is the fifth planet from the sun?",
    a: [{ text: "Mars", isCorrect: false, },
    { text: "Earth", isCorrect: false },
    { text: "Jupiter", isCorrect: true },
    { text: "Venus", isCorrect: false }
    ]

},
{
    id: 5,
    q: "The word atom is from a Greek word meaning?",
    a: [{ text: "Small", isCorrect: false, },
    { text: "Indivisible", isCorrect: true },
    { text: "Unseen", isCorrect: false },
    { text: "Visible", isCorrect: false }
    ]

},
{
    id: 6,
    q: "What creatures travel in gaggles?",
    a: [{ text: "Eagles", isCorrect: false, },
    { text: "Prairie dogs", isCorrect: false },
    { text: "Cows", isCorrect: false },
    { text: "Geese", isCorrect: true }
    ]

},
{
    id: 7,
    q: "What creature do the Galapagos Islands take their name from?",
    a: [{ text: "Bearded dragon", isCorrect: false, },
    { text: "Seagull", isCorrect: false },
    { text: "Tortoise", isCorrect: true },
    { text: "Mountain Quail", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Atolls are most probably formed by?",
    a: [{ text: "A rise in the earth's crust", isCorrect: false, },
    { text: "Sand brought in from the mainland", isCorrect: false },
    { text: "Collapse of the center of a volcano", isCorrect: false },
    { text: "Coral reef upbuilding during subsidence", isCorrect: true }
    ]

},
{
    id: 9,
    q: "Plants get their nitrogen from?",
    a: [{ text: "Rain", isCorrect: false, },
    { text: "The soil", isCorrect: true },
    { text: "The air", isCorrect: false },
    { text: "The bedrock", isCorrect: false }
    ]

},
{
    id: 10,
    q: "The first animal launched into orbit was a?",
    a: [{ text: "Dog", isCorrect: true, },
    { text: "Monkey", isCorrect: false },
    { text: "Chimpanzee", isCorrect: false },
    { text: "Mouse", isCorrect: false }
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
let id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 10) {
        id++;
        iterate(id);
        console.log(id);
    }

})

function giveName() {

    const name = prompt("Enter your name");

    document.getElementById("outputName").innerText = name;
}







// add fun category names to each html
// add sound effects for correct and wrong
// maybe music?
// more to come