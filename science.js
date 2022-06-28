// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is the normal pH level of the human blood?",
    a: [{ text: "7.40", isCorrect: true },
        { text: "6.0", isCorrect: false },
        { text: "13.5", isCorrect: false },
        { text: "8.7", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the chemical symbol for table salt?",
    a: [{ text: "S", isCorrect: false, },
        { text: "NaCl", isCorrect: true },
        { text: "K", isCorrect: false },
        { text: "Cl", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Tinnitus problem is related to?",
    a: [{ text: "Eye", isCorrect: false, },
        { text: "Nose", isCorrect: false },
        { text: "Ankle", isCorrect: false },
        { text: "Ear", isCorrect: true }
    ]

},

{
    id: 3,
    q: "What is the medical term for low blood sugar?",
    a: [{ text: "Myocarditis", isCorrect: false, },
        { text: "Syncopy", isCorrect: false },
        { text: "Hypoglacemia", isCorrect: true },
        { text: "Tachycardia", isCorrect: false }
    ]

},

{
    id: 4,
    q: "How many men have walked on the moon? ",
    a: [{ text: "4", isCorrect: false, },
        { text: "7", isCorrect: false },
        { text: "12", isCorrect: true },
        { text: "10", isCorrect: false }
    ]

},
{
    id: 5,
    q: "As you go down into a well, your weight?",
    a: [{ text: "Increases slightly", isCorrect: false, },
        { text: "Decreases slightly", isCorrect: true },
        { text: "Remains the same", isCorrect: false },
        { text: "None of the above", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Bees must collect nectar from approximately how many flowers to make 1 pound of honeycomb?",
    a: [{ text: "10 thousand", isCorrect: false, },
        { text: "20 million", isCorrect: true },
        { text: "2 million", isCorrect: false },
        { text: "50 million", isCorrect: false }
    ]

},
{
    id: 7,
    q: "The only species of cat that lives and hunts in groups is?",
    a: [{ text: "Lion", isCorrect: true, },
        { text: "Leopard", isCorrect: false },
        { text: "Jaguar", isCorrect: false },
        { text: "Cougar", isCorrect: false }
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