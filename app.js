function validateEmail(event) {
    event.preventDefault(); // Prevent form submission
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    const error = document.getElementById('error-message')

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      emailInput.focus(); 
      error.classList.remove('hidden')
      error.innerHTML = "Please provide a valid email address"
      emailInput.classList.add('border-Light-Red')
      return;
    } else {
        error.classList.add('hidden')
        error.innerHTML = ""
        emailInput.classList.remove('border-Light-Red')
    }
   
}