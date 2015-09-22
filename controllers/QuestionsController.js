surveyBot.controller('QuestionsCtrl', function QuestionsCtrl($scope, SurveyFactory) {
  $scope.answerOne = SurveyFactory.answersOne;
  $scope.answerTwo = SurveyFactory.answersTwo;
  $scope.showEm = true;
  $scope.SurveyFactory = SurveyFactory;

});
