document.getElementById('subscription-form').addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Here you would typically send the email to your server or email marketing service
    alert('Thank you for subscribing, ' + email + '!');
  });
  