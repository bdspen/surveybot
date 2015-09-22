surveyBot.factory('SurveyFactory', function SurveyFactory() {
  var factory = {};
  factory.answersOne = [];
  factory.answersTwo = [];

  factory.addAnswers = function() {
    var answerOne = { questionOne: factory.questionResultOne };
    var answerTwo = { questionTwo: factory.questionResultTwo };

    factory.answersOne.push(answerOne);
    factory.answersTwo.push(answerTwo);

    factory.questionResultOne = null;
    factory.questionResultTwo = null;

  };
  return factory;
});
