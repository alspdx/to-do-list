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

    $(".to-do-header").show();

    $("#to-do-item").append("<span class='remove-list'><dt><span class='list-item'>" + newTask.name + "</span></dt><dd>" + newTask.detail + "</span>");

    $(".remove-list").last().click(function() {
      $(this).addClass("strike-thru");
    });
  });
});
