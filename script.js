$(document).ready(function() {
    $('#contact-link').click(function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Check platform and use appropriate mailto URL
      if (/android/i.test(navigator.userAgent)) {
        window.location.href = "mailto:alphyjose012@gmail.com"; // Use mailto for Android
      } else {
        window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=alphyjose012@gmail.com"; // Open Gmail web app for others
      }
    });
  });

  // Get Current Year
function getCurrentYear() {
  var d = new Date();
  var year = d.getFullYear();
  document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

  $(document).ready(function() {

    // Form validation with jQuery Validate plugin
    $("#submit-form").validate({ // Change to your form's ID if different
      rules: {
        fname: {
          required: true
        },
        mail: {
          required: true,
          email: true,
        },
        msg: {
          required: true
        }
      },
      messages: {
        fname: {
          required: "Please enter your fullname"
        },
        mail: {
          required: "Please enter your email address",
          email: "Please enter a valid email address",
        },
        msg: {
          required: "Please enter your message"
        }
      }
    })
});
// For sending the data from the website
$(document).ready(function() {
  $("#submit-form").submit(function(e) {
    e.preventDefault(); // Prevent default form submission

    var isValid = true;

    $("#submit-form input[required]").each(function() {
      if ($(this).val().trim() === "") {
        isValid = false;
        $(this).addClass("error");
      } else {
        $(this).removeClass("error");
      }
    });

    if (isValid) {
      $("#loading-overlay").removeClass("d-none");

      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz-MPY9GKZ1dRJtSC3xRc0PD-SkEM_6uo_T5dPyy47N9RS5sQ4aEDBW11YJRzXBLHTxLw/exec",
        data: $(this).serialize(),
        method: "post",
        success: function(response) {
          $("#loading-overlay").addClass("d-none");
          $("#alert-popup").text("Submitted Successfully!").removeClass("alert-danger").addClass("alert-success");
          $("#alert-popup").removeClass("d-none");
          setTimeout(function() {
            $("#alert-popup").addClass("d-none");
            location.reload(); // Optionally reload page after a delay
          }, 2000);
        },
        error: function(err) {
          $("#loading-overlay").addClass("d-none");
          $("#alert-popup").text("Error submitting form").removeClass("alert-success").addClass("alert-danger");
          $("#alert-popup").removeClass("d-none");
          setTimeout(function() {
            $("#alert-popup").addClass("d-none");
          }, 2000);
        }
      });
    } else {
      alert("Please fill out all required fields.");
    }
  });
});

  