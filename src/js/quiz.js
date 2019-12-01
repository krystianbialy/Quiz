var quizQuestion = document.getElementById('quiz__question');
var quizAnswer1 = document.getElementById('quiz__answers-list-item-1');
var quizAnswer2 = document.getElementById('quiz__answers-list-item-2');
var quizAnswer3 = document.getElementById('quiz__answers-list-item-3');
var quizAnswer4 = document.getElementById('quiz__answers-list-item-4');
var score = document.getElementById('quiz__score-text-value');

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
        '</DOCTYPE HTML>',
        '</DOCTYPE>',
        '<!DOCTYPE html>',
        '</DOCTYPE html>'
      ],
      answer: 3
    },
    {
      question:
        'Which of the following HTML Elements is used for making any text bold ? ',
      options: ['<p>', '<i>', '<li>', '<b>'],
      answer: 4
    },
    {
      question:
        'Which of the following HTML element is used for creating an unordered list? ',
      options: ['<ui>', '<i>', '<em>', '<ul>'],
      answer: 4
    }
  ],
  index: 0,
  score: 0,
  load: function() {
    quizQuestion.innerHTML = this.sets[this.index].question;
    quizAnswer1.innerHTML = this.sets[this.index].options[0];
    quizAnswer2.innerHTML = this.sets[this.index].options[1];
    quizAnswer3.innerHTML = this.sets[this.index].options[2];
    quizAnswer4.innerHTML = this.sets[this.index].options[3];
    score.innerHTML = this.score + '/' + this.sets.length;
  },
  check: function(answerId) {
    var id = answerId.split('');
    var test1 = id[id.length - 1];
    var test2 = this.sets[this.index].answer;
    console.log(test1);
    console.log(test2);
    if (id[id.length - 1] == this.sets[this.index].answer) {
      console.log('GOOD');
      this.score += 1;
      this.scoreRefresh();
      console.log('Score +' + this.score);
    } else {
      console.log('BAD');
    }
  },
  scoreRefresh: function() {
    score.innerHTML = this.score + '/' + this.sets.length;
  }
};

window.onload = quiz.load();

var quizAnswers = document.querySelectorAll(
  '#quiz__answers-list-item-1, #quiz__answers-list-item-2, #quiz__answers-list-item-3, #quiz__answers-list-item-4'
);

for (var number = 0; number < quizAnswers.length; number += 1) {
  quizAnswers[number].onclick = function() {
    var answerIdName = this.id;
    quiz.check(answerIdName);
  };
}
