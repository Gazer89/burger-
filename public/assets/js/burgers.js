// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devoure").on("click", function(event) {
        console.log(event)
      var id = $(this).data("id");
      var newDevoure = $(this).data("newdevoure");
  
      var newDevoureState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevoureState
      }).then(
        function() {
          console.log("changed devuoer to", newDevoure);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });


  
    $(".createBurger").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  