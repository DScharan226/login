const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Example restrictions: Username must be 'user' and password must be 'password'
  if (username === 'user' && password === 'password') {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Redirect on success
  } else {
    errorMessage.classList.remove('hidden');
    setTimeout(() => {
      errorMessage.classList.add('hidden');
    }, 3000); // Hide error message after 3 seconds
  }
});
