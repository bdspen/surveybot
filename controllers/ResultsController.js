surveyBot.controller('ResultsCtrl', function ResultsCtrl($scope, SurveyFactory) {
  $scope.resultsOne = SurveyFactory.answersOne;
  $scope.resultsTwo = SurveyFactory.answersTwo;
  $scope.SurveyFactory = SurveyFactory;

});
