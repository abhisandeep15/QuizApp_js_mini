const questions=[
    {
    question:"Among which is belongs to primitive datatype in js?",
    options:[
        {text: "py",correct:false},
        {text:"boolean",correct:true},
        {text:"int",correct:false},
        {text:"js",correct:false}
    ]
    },
    {
        question:"what is the first name of javascript?",
        options: [
            {text: "java", correct: false},
            {text: "javascript", correct: false},
            {text: "LiveScript", correct: false},
            {text: "Mocha", correct: true}
        ]
    },
    {
        question:"Which of the follwing is used in javascript?",
        options: [
            {text: "float", correct: false},
            {text: "int", correct: false},
            {text: "Bigint", correct: true},
            {text: "None of the above", correct: false}
            ]
    
    },
    {
        question:"what is reactjs?",
        options: [
            {text: "A library for building user interface components", correct: true},
            {text: "A framework for building user interface components", correct: false},
            {text: "A library for building backend components", correct: false},
            {text: "A framework for building backend components", correct: false}
            ]

    },
    {
        question:"what is the use of this keyword in js?",
        options: [
            {text: "To call a function", correct: false},
            {text: "To access the properties of an object", correct: false},
            {text: "To access the properties of the current object", correct: true},
            {text: "To access the properties of the parent object", correct: false}
            ]
    },
    {
        question:"In the following which is mutable?",
        options: [
            {text: "Object", correct: true},
            {text: "Boolean", correct: false},
            {text:"py" , correct:false},
            {text:"String", correct: false}
            ]
    },
    {
        question: "in the following which is immutable?",
        options: [
            {text: "Array", correct: false},
            {text: "Boolean", correct: true},
            {text:"java" , correct:false},
            {text:"object", correct: false}
            ]
    },
    {
        question: "what is the use of map function in js?",
        options: [
            {text: "To filter the array", correct: false},
            {text: "To find the index of the array", correct: false},
            {text: "To create a new array with the results of applying a provided function on everyelement in this array", correct: true},
            {text: "To delete the array", correct: false},
            {text:"All are false",correct:false}
            ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
    
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + "." + currentQuestion.question;

    currentQuestion.options.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display='block';
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You have  Scored: ${score} out of: ${questions.length} questions`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();







































































































