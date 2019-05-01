// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-pickedup").on("click", function(event) {
    var id = $(this).data("id");
    var newPickedup = $(this).data("newpickedup");

    var newPickedupState = {
      pickedup: newPickedup
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newPickedupState
    }).then(
      function() {
        console.log("changed pickedup to", newPickedup);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bur").val().trim() // removed ,
      // pickedup: $("[name=pickedup]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("ordered new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE "i.e. devour/eat it" request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("devour/eat the burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
