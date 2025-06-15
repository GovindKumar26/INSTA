document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const inputs = loginForm.querySelectorAll('input');

    // Add focus effects to inputs
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });

    // Form submission handling
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = inputs[0].value;
        const password = inputs[1].value;

        if (!username || !password) {
            alert('Please fill in all fields');
            return;
        }

        // Here you would typically make an API call to your backend
        console.log('Login attempt:', { username, password });
        alert('This is a demo. No actual login will be performed.');
    });
}); 