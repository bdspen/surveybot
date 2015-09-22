surveybot.controller('QuestionOneCtrl', function QuestionOneCtrl($scope, QuestionsFactory) {
  $scope.answerOne = QuestionsFactory.answer;
  // $scope.addStudentWithPermissionSlip = function(student) {
  //   student.permissionSlip = true;
  // };
});
