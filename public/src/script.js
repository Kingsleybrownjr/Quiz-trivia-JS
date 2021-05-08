const questionData = require("./data");
const Question = require("./quizModel");
const QuizBrain = require("./quizBrain");

const questionBank = [];

for (content of questionData) {
	const quizQuestion = content.question;
	const quizAnswer = content.correct_answer;
	const newQuestion = new Question(quizQuestion, quizAnswer);

	questionBank.push(newQuestion);
}

const quiz = new QuizBrain(questionBank);

while (quiz.stillHaveQuestions()) {
	quiz.newQuestion();
}
