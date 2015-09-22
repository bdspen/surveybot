surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, SurveyFactory) {
  $scope.answerOne = SurveyFactory.answersOne;
  $scope.answerTwo = SurveyFactory.answersTwo;
  $scope.SurveyFactory = SurveyFactory;

});
