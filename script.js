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
  