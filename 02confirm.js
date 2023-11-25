document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error").value;
    // TODO: Implement booking logic
    
    alert("Booking successful! We will contact you soon."); // Temporary message for demonstration purposes
  });
  