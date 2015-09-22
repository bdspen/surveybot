surveyBot.controller('QuestionTwoCtrl', function QuestionTwoCtrl($scope, QuestionsFactory) {
  $scope.answerTwo = QuestionsFactory.answers[1];
  // $scope.addStudentWithPermissionSlip = function(student) {
  //   student.permissionSlip = true;
  // };
});
