"use strict";

const question1 = {
    question: "What eminent scientist hosted the television show Cosmos?",
    option1: "Some dude that i will add later",
    option2: "Stephen Hawking",
    option3: "Carl Sagan",
    option4: "Albert Einstein",
    correct: 3,
}
const question2 = {
    question: "Which of these films parodied the Cold War?",
    option1: "Patton",
    option2: "Transformers",
    option3: "Endless Summer",
    option4: "Dr.Strangelove",
    correct: 4,
}
const question3 = {
    question: "Which song has not won a Eurovision competition?",
    option1: "Pump Pump",
    option2: "La, La, La",
    option3: "Ne partez pas sans moi",
    option4: "Ding-a-Dong",
    correct: 1,
}
const question4 = {
    question: "In which of these countries did manga originate?",
    option1: "Canada",
    option2: "Korea",
    option3: "Japan",
    option4: "China",
    correct: 3,
}
const question5 = {
    question: "Who is the voice of Remy the Rat in Ratatouille?",
    option1: "Brad Garrett",
    option2: "Will Patton",
    option3: "Patton Oswalt",
    option4: "Will Geer",
    correct: 3,
}

const questions = [question1, question2, question3, question4, question5];

// selecting variables

// Buttons
const btnStart = document.querySelector(".btn-start");
const btnNext = document.querySelector(".btn-next");
// Labels
const labelQuestion = document.querySelector(".question");
const labelOption2 = document.querySelector(".option2");
const labelOption1 = document.querySelector(".option1");
const labelOption3 = document.querySelector(".option3");
const labelOption4 = document.querySelector(".option4");
// all 4 options
const options = document.querySelectorAll(".options");
// contrainers
const welcomeSection = document.querySelector(".welcome-page");
const quizSection = document.querySelector(".quiz");

let qIndex = 0;
// let currentQuestion = questions[qIndex]

// updated text of questions
const updateQuestion = function(q) {
    labelQuestion.textContent = q.question;
    labelOption1.textContent = q.option1;
    labelOption2.textContent = q.option2;
    labelOption3.textContent = q.option3;
    labelOption4.textContent = q.option4;
}


btnNext.addEventListener("click", function() {
    qIndex++;
    updateQuestion(questions[qIndex])
})

























// // starting the game / pressing the start button
// btnStart.addEventListener("click", function() {
//     qIndex = 0;
//     // switching what is visable
//     welcomeSection.classList.add("hidden");
//     quizSection.classList.remove("hidden");
    
//     // update question
//     updateQuestion(currentQuestion);
// })



// for(let i = 0; i < options.length; i++) {
//     options[i].addEventListener("click", function() {
//         const answer = Number(options[i].getAttribute("data-value"));
//         console.log(answer);
        
//         if(answer === currentQuestion.correct) {
//             console.log("Answer correct");
//             qIndex++;
//         } else {
//             console.log("answer wrong")
//         }
//     })
// }
