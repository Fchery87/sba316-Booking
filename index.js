let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

document.addEventListener('DOMContentLoaded', function () {
  const creditForm = document.getElementById('creditForm');
  const messageDiv = document.getElementById('message');

  creditForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput.addEventListener('input', function (event) {
      const email = event.target.value;
      if (!emailRegex.test(email)) {
        event.target.setCustomValidity('Please enter a valid email address.');
      } else {
        event.target.setCustomValidity('');
      }
    });
    const creditLimit = document.getElementById('creditLimit').value;

    // Validation
    if (!name || !email || !creditLimit) {
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

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = type;
  }
});
