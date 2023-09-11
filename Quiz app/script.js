const quizData = [
	{
	question: "Which Language runs in web browser?",
	a: "Java",
	b: "C",
	c: "Python",
	d: "Javascript",
	correct: "d",
	},
{
	question: "What does CSS stand for?",
	a: "Central Style Sheets",
	b: "Cascading Style Sheets",
	c: "Cascading spread Sheets",
	d: "Cascading simple Sheets",
	correct: "b",
},
{
	question: "What does HTML stand for?",
	a: "Hypertext Markup Language",
	b: "Hypertext Makeup Language",
	c: "Hypertext Machine Language",
	d: "Hypertext Mashup Language", 
	correct: "a",
},
{
	question: "What is the first programming Language in Computer programming History?",
	a: "Assembly Language",
	b: "C",
	c: "C++",
	d: "Fortran",
	correct: "d",

},
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
	deselectAnswers()
	const currentQuizData = quizData[currentQuiz]

	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
	answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
	let answer
	answerEls.forEach(answerEl => {
		if (answerEl.checked) {
			answer = answerEl.id
		}
	})
	return answer
}

submitBtn.addEventListener('click', () =>{
	const answer = getSelected()
	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++
		}

		currentQuiz++

		if (currentQuiz < quizData.length) {
			loadQuiz()
		}else{
			quiz.innerHTML = `
			<h2>You answered ${score}/${quizData.length} questions correctly</h2>
			<button onclick = "location.reload()">Start Againss</button>
			`
			
		}

	}

})
