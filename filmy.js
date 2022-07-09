document.getElementById("name").onclick = function(){
    const name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}


// Questions will be asked
const Questions = [{
    id: 0,
    q: "Co oznacza zielony kod w filmie 'Matrix'?",
    a: [{ text: "Japoński przepis na Sushi", isCorrect: true },
        { text: "Przepis na kopytka", isCorrect: false },
        { text: "Poezja Japońska", isCorrect: false },
        { text: "Przepis babci Agnieszki na placki ziemniaczane", isCorrect: false }
    ],

},
{
    id: 1,
    q: "Kto jest reżyserem amerykańskiego thrillera z 1960 roku 'Psychoza', w którym znajduje się słynna scena morderstwa pod prysznicem?",
    a: [{ text: "Francis Ford Coppola", isCorrect: false, },
        { text: "Roman Polański", isCorrect: false },
        { text: "Alfred Hitchcock", isCorrect: true },
        { text: "Stanley Kubrick", isCorrect: false }
    ]

},
{
    id: 2,
    q: "",
    a: [{ text: "Geral Ford", isCorrect: false, },
        { text: "Richard Nixon", isCorrect: true },
        { text: "Jimmy Carter", isCorrect: false },
        { text: "Ronald Reagan", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Jak nazywał się serial, w którym Pamela Anderson grała rolę C.J. Parker?",
    a: [{ text: "Żar tropików", isCorrect: false, },
        { text: "Policjanci z Miami", isCorrect: false },
        { text: "Słoneczny patrol", isCorrect: true },
        { text: "Przyjaciele", isCorrect: false }
    ]

},

{
    id: 4,
    q: "Jak nazywa się ta aktorka, która w 2001 roku zagrała główną rolę w komedii 'Legalna blondynka'? ",
    a: [{ text: "Sarah Michelle Gellar", isCorrect: false, },
        { text: "Jennifer Aniston", isCorrect: false },
        { text: "Nicole Kidman", isCorrect: false },
        { text: "Reese Witherspoon", isCorrect: true }
    ]

},
{
    id: 5,
    q: "Jarema Stępowski występował w serialu Wojna domowa, gdzie wcielił się w charakterystyczną postać mężczyzny zbierającego suchy chleb dla?",
    a: [{ text: "Gołębi", isCorrect: false, },
        { text: "Koni", isCorrect: true },
        { text: "Królików", isCorrect: false },
        { text: "Kozy", isCorrect: false }
    ]

},
{
    id: 6,
    q: "Które zdanie na temat Bridget Jones nie jest prawdziwe?",
    a: [{ text: "Zawsze ubiera się u Prady.", isCorrect: true, },
        { text: "Ma słabość do alkoholu i papierosów.", isCorrect: false},
        { text: "Obsesyjnie zapisuje spożywane kalorie.", isCorrect: false },
        { text: "Jest 30-kilkulatką poszukującą miłości.", isCorrect: false }
    ]

},
{
    id: 7,
    q: "W kultowym już filmie 'Nagi instynkt' śmiałą rolę pisarki Catherine Tramell zagrała?",
    a: [{ text: "Sharon Stone", isCorrect: true, },
        { text: "Demi Moore", isCorrect: false },
        { text: "Nicole Kidman", isCorrect: false },
        { text: "Julia Roberts", isCorrect: false }
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
var numberOfTrue = 0;
var numberOfFalse = 0;

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

    const selected = "";

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
        if (selected) {
            result[0].innerHTML = "Correct!";
            result[0].style.color = "green";
            numberOfTrue++;
        } else {
            result[0].innerHTML = "Wrong!";
            result[0].style.color = "red";
            numberOfFalse++;
        }
    })
}
// end of iterate

if (start) {
    iterate(0);
}


// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 11) {
        id++;
        iterate(id);
        console.log(id);
    }

    if (id >= 11) {
        for (var i = 0; i < Questions.length; i++) {
          if (i === true) {
            numberOfTrue++;
          } 
        }
        
        alert(`You got ${numberOfTrue} questions out of ${Questions.length} right`);
    }
})
  
/*const score = 0;
const score = document.getElementById('evaluate').score;

// "You scored" + numberOfTrue out of (numberOfTrue + numberOfFalse)

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