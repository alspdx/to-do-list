function Task(taskName, taskDetails) {
  this.name = taskName;
  this.detail = taskDetails;
}

$(function() {
  $(document).submit(function(event) {
    event.preventDefault();

    var nameInput = $("#name").val();
    var detailsInput = $("#task-details").val();
    var newTask = new Task(nameInput, detailsInput);

    if (nameInput) {
      $("#to-do-item").append("<span class='list-output'><dt><span class='list-item'>" + newTask.name + "</span></dt><dd>" + newTask.detail + "</span>");
      $(".no-task").slideUp();
      $(".to-do").slideDown();
    } else {
      $(".no-task").slideDown();
    }

    $(".list-output").click(function() {
      $(this).removeClass("list-output");
      $(this).addClass("strike-thru");
      $(".strike-thru").click(function() {
        $(this).slideUp();
      });
    });
  });
});
