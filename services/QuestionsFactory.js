surveybot.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswers = function() {
    var results = { answerOne: factory.questionResult, answerTwo: factory.questionResult };
    factory.answers.push(results);
    factory.questionResult = null;
  };

  factory.deleteStudent = function(student) {
    var index = factory.students.indexOf(student)
    factory.students.splice(index, 1);
  };
  return factory;
});
