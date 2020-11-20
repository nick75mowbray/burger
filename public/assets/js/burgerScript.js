$( document ).ready(function(){


$(function() {
    $(".change-eaten").on("click", function(event) {
      let id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");
      const newEatState = {
        devoured: newDevoured
      };
  
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      // get burger data from form
      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request
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

}); //end doc ready