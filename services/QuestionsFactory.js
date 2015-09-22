surveyBot.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswers = function() {
    var answerOne = { answerOne: factory.questionResultOne };
    var answerTwo = { answerTwo: factory.questionResultTwo };

    factory.answers.push(answerOne, answerTwo);
    factory.questionResult = null;
  };

  // factory.deleteStudent = function(student) {
  //   var index = factory.students.indexOf(student)
  //   factory.students.splice(index, 1);
  // };
  return factory;
});
