document.getElementById("name").onclick = function(){
    const name = prompt("Enter your name");
    document.getElementById("outputName").innerText = name;
}







// Questions will be asked
const Questions = [{
    id: 0,
    q: "Co zostało z psa, który pił lewy alkohol? - Samogon. Ten typ żartu nazywamy często?",
    a: [{ text: "Biszkoptem", isCorrect: false },
        { text: "Sucharem", isCorrect: true },
        { text: "Waflem", isCorrect: false },
        { text: "Krakersem", isCorrect: false }
    ]

},
{
    id: 1,
    q: "„Żona modna”, utwór krytykujący znamienne dla XVIII w. hołdowanie cudzoziemszczyźnie, jest jedną z najbardziej znanych satyr?",
    a: [{ text: "Hugona Kołłątaja", isCorrect: false, },
        { text: "Ignacego Krasickiego", isCorrect: true },
        { text: "Stanisława Staszica", isCorrect: false },
        { text: "Juliana Ursyna Niemcewicza", isCorrect: false }
    ]

},
{
    id: 2,
    q: "Który prezydent Stanów Zjednoczonych, jako jedyny do tej pory, ustąpił ze stanowiska przed końcem kadencji??",
    a: [{ text: "Geral Ford", isCorrect: false, },
        { text: "Richard Nixon", isCorrect: true },
        { text: "Jimmy Carter", isCorrect: false },
        { text: "Ronald Reagan", isCorrect: false }
    ]

},

{
    id: 3,
    q: "Mama powiada: 'Napij się mleka'. A on na drzewo mamie ucieka. Mama powiada :'Chodź do kąpieli','_________________'.Jakiego wersu brakuje w znanym wierszu Juliana Tuwima?",
    a: [{ text: "A on się tarza w czystej pościeli.", isCorrect: false, },
        { text: "A on chce czekać aż do niedzieli.", isCorrect: false },
        { text: "A on się boi, że się wybieli.", isCorrect: true },
        { text: "A on używa nowych forteli.", isCorrect: false }
    ]

},

{
    id: 4,
    q: "'Rada małpa, że się śmieli, kiedy mogła udać człeka, widząc panią raz w kąpieli, wlazła pod stół - cicho czeka'.Kto jest autorem wiersza 'Małpa w kąpieli'? ",
    a: [{ text: "Aleksander Fredro", isCorrect: true, },
        { text: "Julian Tuwim", isCorrect: false },
        { text: "Adam Mickiewicz", isCorrect: false },
        { text: "Jan Brzechwa", isCorrect: false }
    ]

},
{
    id: 5,
    q: "O romans z którym prezydentem USA była podejrzewana Marilyn Monroe?",
    a: [{ text: "Ronaldem Reaganem", isCorrect: false, },
        { text: "Lyndonem Johnsonem", isCorrect: false },
        { text: "Richardem Nixonem", isCorrect: false },
        { text: "Johnem Fitzeraldem Kennedym", isCorrect: true }
    ]

},
{
    id: 6,
    q: "Księżna Walii, Diana, zginęła w 1997 roku w wypadku samochodowym w:?",
    a: [{ text: "Paryżu", isCorrect: true, },
        { text: "Londynie", isCorrect: false},
        { text: "Madrycie", isCorrect: false },
        { text: "Rzymie", isCorrect: false }
    ]

},
{
    id: 7,
    q: "Skąd pochodzi modelka, aktorka i projektantka mody, Claudia Schiffer, która zyskała sławę na początku lat 90. jako jedna z najbardziej uznanych modelek na świecie??",
    a: [{ text: "Z Austrii", isCorrect: false, },
        { text: "Z Niemiec", isCorrect: true },
        { text: "Z USA", isCorrect: false },
        { text: "Z Francji", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Za niemiecki epos narodowy uznaje się napisaną ok. 1200 roku przez nieznanego autora 'Pieśń o __________'.?",
    a: [{ text: "Nibelungach", isCorrect: true, },
        { text: "Hobbitach", isCorrect: false },
        { text: "Rolandzie", isCorrect: false },
        { text: "Burgundach", isCorrect: false }
    ]

},
{
    id: 9,
    q: "Rzeczpospolita Obojga Narodów powstała na mocy unii?",
    a: [{ text: "Wileńskiej", isCorrect: false, },
        { text: "Brzeskiej", isCorrect: false },
        { text: "Krewskiej", isCorrect: false },
        { text: "Lubelskiej", isCorrect: true }
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