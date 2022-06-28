// Questions will be asked
const Questions = [{
    id: 0,
    q: "What country has a unicorn as part of its national emblem?",
    a: [{ text: "Poland", isCorrect: false },
        { text: "Ghana", isCorrect: false },
        { text: "Australia", isCorrect: false },
        { text: "Scotland", isCorrect: true }
    ]

},
{
    id: 1,
    q: "Where were fortune cookies invented?",
    a: [{ text: "Korea", isCorrect: false, },
        { text: "San Francisco", isCorrect: false },
        { text: "China", isCorrect: false },
        { text: "Japan", isCorrect: true }
    ]

},
{
    id: 2,
    q: "When a question mark immediately follows an exclamation mark, that is called what?",
    a: [{ text: "Exclamation Mark", isCorrect: false, },
        { text: "Interrobang", isCorrect: true },
        { text: "Exclamation point", isCorrect: false },
        { text: "SARC mark", isCorrect: false }
    ]

},

{
    id: 3,
    q: "The computer mouse speed is measured in what?",
    a: [{ text: "Millimeters per second", isCorrect: false, },
        { text: "Mickeys", isCorrect: true },
        { text: "Feet per second", isCorrect: false },
        { text: "Miles per second", isCorrect: false }
    ]

},

{
    id: 4,
    q: "The computer mouse speed is measured in what?",
    a: [{ text: "Millimeters per second", isCorrect: false, },
        { text: "Mickeys", isCorrect: true },
        { text: "Feet per second", isCorrect: false },
        { text: "Miles per second", isCorrect: false }
    ]

},
{
    id: 5,
    q: "In the state of Georgia, it is illegal to eat what with a fork?",
    a: [{ text: "Pizza", isCorrect: false, },
        { text: "Fried chicken", isCorrect: true },
        { text: "Whoopie Pie", isCorrect: false },
        { text: "Corn on the Cob", isCorrect: false }
    ]

},
{
    id: 6,
    q: "In public places in the state of Florida, what's illegal to do when wearing a swimsuit?",
    a: [{ text: "Drink alcohol", isCorrect: false, },
        { text: "Drive a car", isCorrect: false },
        { text: "Mow the lawn", isCorrect: false },
        { text: "Sing", isCorrect: true }
    ]

},
{
    id: 7,
    q: "Which saying should every programming developer know that helps improve their skills? ",
    a: [{ text: "ASAP", isCorrect: false, },
        { text: "Help Vampires", isCorrect: false },
        { text: "RTFM", isCorrect: true },
        { text: "Compassionate Alternatives to the above", isCorrect: false }
    ]

},
{
    id: 8,
    q: "Which country do kiwifruit originate",
    a: [{ text: "Australia", isCorrect: false, },
        { text: "China", isCorrect: true },
        { text: "New Zealand", isCorrect: false },
        { text: "Japan", isCorrect: false }
    ]

},
{
    id: 9,
    q: "In which country are Panama hats made?",
    a: [{ text: "Panama", isCorrect: false, },
        { text: "Brazil", isCorrect: false },
        { text: "Guatemala", isCorrect: false },
        { text: "Ecuador", isCorrect: true }
    ]

},
{
    id: 10,
    q: "From which country do French fries originate?",
    a: [{ text: "Belgium", isCorrect: true, },
        { text: "US", isCorrect: false },
        { text: "France", isCorrect: false },
        { text: "Germany", isCorrect: false }
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

// don't forget the counter for wind and loses
// Show selection for op1       !!!ADD A FLIP CARD to the question div with right or wrong msg?
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
        result[0].style.color = "green";    //set timeout so the wrong answer goes away. make it more fun
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

var readySetGo = {};
readySetGo.opacityIn = [0,1];
readySetGo.scaleIn = [0.2, 1];
readySetGo.scaleOut = 3;
readySetGo.durationIn = 800;
readySetGo.durationOut = 600;
readySetGo.delay = 500;

   anime.timeline({})
  .add({
    targets: '.readySetGo .letters-1',
    opacity: readySetGo.opacityIn,
    scale: readySetGo.scaleIn,
    duration: readySetGo.durationIn,
    autoplay: false,
    
  }).add({
    targets: '.readySetGo .letters-1',
    opacity: 0,
    scale: readySetGo.scaleOut,
    duration: readySetGo.durationOut,
    easing: "easeInExpo",
    delay: readySetGo.delay,
    autoplay: false,
    
  }).add({
    targets: '.readySetGo .letters-2',
    opacity: readySetGo.opacityIn,
    scale: readySetGo.scaleIn,
    duration: readySetGo.durationIn,
    
  }).add({
    targets: '.readySetGo .letters-2',
    opacity: 0,
    scale: readySetGo.scaleOut,
    duration: readySetGo.durationOut,
    easing: "easeInExpo",
    delay: readySetGo.delay,
    autoplay: false,
    
  }).add({
    targets: '.readySetGo .letters-3',
    opacity: readySetGo.opacityIn,
    scale: readySetGo.scaleIn,
    duration: readySetGo.durationIn,
    autoplay: false,
    
  }).add({
    targets: '.readySetGo .letters-3',
    opacity: 0,
    scale: readySetGo.scaleOut,
    duration: readySetGo.durationOut,
    easing: "easeInExpo",
    delay: readySetGo.delay,
    autoplay: false,
    
  }).add({
    targets: '.readySetGo',
    opacity: 0,
    duration: 500,
    delay: 500,
  
  })
    
  var animation = anime({
    targets: '.play-pause-demo .el',
    translateX: 270,
    delay: function(el, i) { return i * 100; },
    direction: 'alternate',
    loop: false,
    autoplay: false,
    easing: 'easeInOutSine'
  });
  
  document.querySelector('.play-pause-demo .play').onclick = animation.play;
  document.querySelector('.play-pause-demo .pause').onclick = animation.pause;


    
    
    
    
    
    
    

//try to make it look like an app 
//do Polish version
// add fun category names to each html
// add sound effects for correct and wrong
// maybe music?
// more to come