const quizDB = [
  {
    question: "Q1: Who is the Prime Minister of India ? ",
    a: "Narendra Yogi",
    b: "Rahul Gandhi",
    c: "Aravind Kejriwal",
    d: "Narendra Modi",
    ans: "ans4",
  },
  {
    question: "Q2: What is the Full Form CSS? ",
    a: "Hyper cascading text",
    b: "Cascading Sheets Shop",
    c: "Cascading Style Sheets",
    d: "None of the Above",
    ans: "ans3",
  },
  {
    question: "Q3: When did India got its Independence ? ",
    a: "1900",
    b: "1947",
    c: "1784",
    d: "1987",
    ans: "ans2",
  },
  {
    question: "Q4: Who is known as God of Cricket ? ",
    a: "Saurav Ganguly",
    b: "Sachin Tendulkar",
    c: "MS Dhoni",
    d: "Virat Kohli",
    ans: "ans2",
  },
  {
    question: "Q5: Who discovered America ? ",
    a: "Vasco Da Gama",
    b: "Portugal Army",
    c: "Columbus",
    d: "All of the Above",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const optn1 = document.querySelector("#optn1");
const optn2 = document.querySelector("#optn2");
const optn3 = document.querySelector("#optn3");
const optn4 = document.querySelector("#optn4");
const optn5 = document.querySelector("#optn5");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadfunction = () => {
  const questionList = quizDB[questionCount];
  question.innerHTML = questionList.question;
  optn1.innerHTML = questionList.a;
  optn2.innerHTML = questionList.b;
  optn3.innerHTML = questionList.c;
  optn4.innerHTML = questionList.d;
};

loadfunction();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((cur) => {
    if (cur.checked) {
      answer = cur.id;
    }
  });
  //Now we are just Returning just and id of the option
  return answer;
};

const deselectAll = () => {
  answers.forEach((cur) => {
    cur.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectAll();

  if (questionCount < quizDB.length) {
    loadfunction();
  } else {
    showScore.innerHTML = `
        <h3>Your Score is ${score}/${quizDB.length} ✔🎉</h3>
        <button class="btn" onclick="location.reload()">Play Again </button>`;
    showScore.classList.remove("scoreArea");
  }
});
