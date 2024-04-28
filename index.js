document.addEventListener('DOMContentLoaded', function() {
    const creditForm = document.getElementById('creditForm');
    const messageDiv = document.getElementById('message');

    creditForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
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
