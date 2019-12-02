var quizQuestion = document.getElementById('quiz__question');
var quizAnswer1 = document.getElementById('quiz__answers-list-item-1');
var quizAnswer2 = document.getElementById('quiz__answers-list-item-2');
var quizAnswer3 = document.getElementById('quiz__answers-list-item-3');
var quizAnswer4 = document.getElementById('quiz__answers-list-item-4');
var quizAllAnswers = [quizAnswer1, quizAnswer2, quizAnswer3, quizAnswer4];
var quizNextQuestionButton = document.getElementById(
  'quiz__next-question-button'
);
var quizScore = document.getElementById('quiz__score-text-value');

var quiz = {
  sets: [
    {
      question: 'What does HTML stands for?',
      options: [
        'Hypertext Machine language.',
        'Hypertext and links markup language.',
        'Hypertext Markup Language.',
        'Hightext machine language.'
      ],
      answer: 3
    },
    {
      question: 'How is document type initialized in HTML5.?',
      options: [
        '<xmp></DOCTYPE HTML></xmp>',
        '<xmp></DOCTYPE></xmp>',
        '<xmp><!DOCTYPE html></xmp>',
        '<xmp></DOCTYPE html></xmp>'
      ],
      answer: 3
    },
    {
      question:
        'Which of the following HTML Elements is used for making any text bold ? ',
      options: [
        '<xmp><p></xmp>',
        '<xmp><i></xmp>',
        '<xmp><li></xmp>',
        '<xmp><b></xmp>'
      ],
      answer: 4
    },
    {
      question:
        'Which of the following HTML element is used for creating an unordered list? ',
      options: [
        '<xmp><ui></xmp>',
        '<xmp><i></xmp>',
        '<xmp><em></xmp>',
        '<xmp><ul></xmp>'
      ],
      answer: 4
    }
  ],
  setIndex: 0,
  score: 0,
  loadQuizSet: function() {
    quizQuestion.innerHTML = this.sets[this.setIndex].question;
    quizAnswer1.innerHTML = this.sets[this.setIndex].options[0];
    quizAnswer2.innerHTML = this.sets[this.setIndex].options[1];
    quizAnswer3.innerHTML = this.sets[this.setIndex].options[2];
    quizAnswer4.innerHTML = this.sets[this.setIndex].options[3];
    quizScore.innerHTML = this.score + '/' + this.sets.length;
  },
  nextQuestion: function() {
    this.setIndex += 1;
    this.loadQuizSet();
  },
  checkAnswer: function(answerId) {
    var id = answerId.split('');
    var test1 = id[id.length - 1];
    var test2 = this.sets[this.setIndex].answer;
    console.log(test1);
    console.log(test2);
    if (id[id.length - 1] == this.sets[this.setIndex].answer) {
      console.log('GOOD');
      this.score += 1;
      this.quizScoreRefresh();
      console.log('Score +' + this.score);
    } else {
      console.log('BAD');
    }
  },
  answerNotClickable: function() {
    var quizAnswers = quizAllAnswers;
    for (var number = 0; number < quizAnswers.length; number += 1) {
      quizAnswers[number].style.pointerEvents = 'none';
    }
  },
  answerClickable: function() {
    var quizAnswers = quizAllAnswers;
    for (var number = 0; number < quizAnswers.length; number += 1) {
      quizAnswers[number].style.pointerEvents = 'auto';
    }
  },
  quizScoreRefresh: function() {
    quizScore.innerHTML = this.score + '/' + this.sets.length;
  }
};

window.onload = quiz.loadQuizSet();

var quizAnswers = quizAllAnswers;
for (var number = 0; number < quizAnswers.length; number += 1) {
  quizAnswers[number].onclick = function() {
    var answerIdName = this.id;
    quiz.checkAnswer(answerIdName);
    quiz.answerNotClickable();
  };
}

quizNextQuestionButton.onclick = function() {
  quiz.nextQuestion();
  quiz.answerClickable();
};
