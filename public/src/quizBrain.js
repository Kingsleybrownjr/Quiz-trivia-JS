const readlineSync = require("readline-sync");

module.exports = class QuizBrain {
	constructor(quizList) {
		this.questionList = quizList;
		this.questionNumber = 0;
		this.score = 0;
	}

	stillHaveQuestions() {
		return this.questionNumber < this.questionList.length;
	}

	checkAnswer(userAnswer, currentAnswer) {
		if (userAnswer.toLowerCase() === currentAnswer.toLowerCase()) {
			this.score += 1;
			console.log("You got it right");
		} else {
			console.log("That's wrong.");
		}
	}

	displayScore(currentAnswer) {
		console.log(`The correct answer is ${currentAnswer} `);
		console.log(`Your current score is: ${this.score}/${this.questionNumber}`);
	}

	newQuestion() {
		const currentQuestion = this.questionList[this.questionNumber];
		this.questionNumber += 1;

		const userAnswer = readlineSync.question(
			`${this.questionNumber}: ${currentQuestion.question}: `
		);
		this.checkAnswer(userAnswer, currentQuestion.answer);
		this.gameOver(currentQuestion.answer);
	}

	gameOver(currentAnswer) {
		if (this.questionNumber === this.questionList.length) {
			console.log("You've completed the quiz!");
			console.log(`Your final score was ${this.score}/${this.questionNumber}`);
		} else {
			this.displayScore(currentAnswer);
		}
	}
};



