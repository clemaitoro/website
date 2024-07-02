document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.more-info-button').forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetUrl = this.getAttribute('href');
  
        // Add the fade-out class
        document.querySelector('.second-part').classList.add('fade-out');
  
        // Wait for the fade-out transition to complete (500ms) before navigating
        setTimeout(() => {
          if (targetUrl !== "#") {
            window.location.href = targetUrl;
          } else {
            // Handle the case where href="#" (e.g., show more information without navigation)
            document.querySelector('.second-part').classList.remove('fade-out');
            document.querySelector('.second-part').classList.add('fade-in');
          }
        }, 300); // Match this with the CSS transition duration (2000ms for transform and box-shadow)
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.third-part .feedback .feedback-div').forEach(feedbackDiv => {
          const raindropsContainer = feedbackDiv.querySelector('.raindrops');
          
          // Create raindrops
          for (let i = 0; i < 100; i++) { // Adjust number of raindrops as needed
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration between 1s and 3s
            raindrop.style.animationDelay = `${Math.random() * 2}s`; // Random delay up to 2s
            raindropsContainer.appendChild(raindrop);
          }
        });
      });
  
      document.addEventListener('DOMContentLoaded', () => {
        const aloneDiv = document.getElementById('alone');
        const raindropsContainer = aloneDiv.querySelector('.raindrops');
        
        // Create raindrops
        for (let i = 0; i < 100; i++) { // Adjust number of raindrops as needed
          const raindrop = document.createElement('div');
          raindrop.className = 'raindrop';
          raindrop.style.left = `${Math.random() * 100}%`;
          raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration between 1s and 3s
          raindrop.style.animationDelay = `${Math.random() * 2}s`; // Random delay up to 2s
          raindropsContainer.appendChild(raindrop);
        }
      });

      document.addEventListener('DOMContentLoaded', function () {
        const contactForm = document.getElementById('contact-form');
    
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
    
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
    
            const templateParams = {
                from_name: name,
                from_email: email,  // This is optional but shows the sender's email in the email header
                message: message,
                user_email: email    // This adds the user's email to the message body
            };
    
            console.log('Sending email with params:', templateParams);
    
            emailjs.send('service_e9d2vr4', 'template_w7v2w8i', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Email sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    console.error('Failed to send email:', error);
                    alert('Failed to send email. Please try again later.');
                });
        });
    });
    
    



