let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.querySelector('.slideshow-container');
  const slidesArray = slides.children;
  for (i = 0; i < slidesArray.length; i++) {
    slidesArray[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slidesArray.length) {
    slideIndex = 1;
  }
  slidesArray[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

document.addEventListener('DOMContentLoaded', function () {
  // Cache elements
  const creditForm = document.getElementById('creditForm');
  const messageDiv = document.getElementById('message');
  const emailInput = document.getElementById('email');

  // Event listener for email input validation
  emailInput.addEventListener('input', function (event) {
    const email = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      event.target.setCustomValidity('Please enter a valid email address.');
    } else {
      event.target.setCustomValidity('');
    }
  });

  // Event listener for form submission
  creditForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve form input values
    const name = document.getElementById('name').value;
    const creditLimit = document.getElementById('creditLimit').value;

    // Validation
    if (!name || !emailInput.value || !creditLimit) {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    if (isNaN(creditLimit) || creditLimit <= 0) {
      showMessage('Please enter a valid credit limit.', 'error');
      return;
    }

    // Form submission (simulate AJAX request)
    showMessage('Your application has been submitted successfully!', 'success');
    creditForm.reset();
  });

  // Function to display message
  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
  }
});
