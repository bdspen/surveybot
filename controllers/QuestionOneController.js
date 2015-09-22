surveyBot.controller('QuestionOneCtrl', function QuestionOneCtrl($scope, QuestionsFactory) {
  $scope.answerOne = QuestionsFactory.answers[0];
  // $scope.addStudentWithPermissionSlip = function(student) {
  //   student.permissionSlip = true;
  // };
});
