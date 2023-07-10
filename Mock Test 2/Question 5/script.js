function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var passwordInput = document.getElementById('password');
    var ageInput = document.getElementById('age');
    var genderInput = document.getElementById('gender');
    var dobInput = document.getElementById('dob');
    var colorInput = document.getElementById('color');

    // Validate name field (required)
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Name is required');
    } else {
        showSuccess(nameInput);
    }

    // Validate email field (required and valid email format)
    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'Email is not valid');
    } else {
        showSuccess(emailInput);
    }

    // Validate phone number field (required and valid format)
    if (phoneInput.value.trim() === '') {
        showError(phoneInput, 'Phone number is required');
    } else if (!isValidPhoneNumber(phoneInput.value.trim())) {
        showError(phoneInput, 'Phone number is not valid');
    } else {
        showSuccess(phoneInput);
    }

    // Validate password field (required and minimum length of 6)
    if (passwordInput.value.trim() === '') {
        showError(passwordInput, 'Password is required');
    } else if (passwordInput.value.trim().length < 6) {
        showError(passwordInput, 'Password should be at least 6 characters');
    } else {
        showSuccess(passwordInput);
    }

    // Validate age field (required and within range)
    if (ageInput.value.trim() === '') {
        showError(ageInput, 'Age is required');
    } else if (isNaN(ageInput.value.trim()) || ageInput.value < 1 || ageInput.value > 120) {
        showError(ageInput, 'Age should be a number between 1 and 120');
    } else {
        showSuccess(ageInput);
    }

    // Validate gender field (required)
    if (genderInput.value === '') {
        showError(genderInput, 'Gender is required');
    } else {
        showSuccess(genderInput);
    }

    // Validate date of birth field (required)
    if (dobInput.value.trim() === '') {
        showError(dobInput, 'Date of Birth is required');
    } else {
        showSuccess(dobInput);
    }

    // Validate color field (required)
    if (colorInput.value.trim() === '') {
        showError(colorInput, 'Favorite Color is required');
    } else {
        showSuccess(colorInput);
    }

    // Check if all fields are valid
    var isValidForm = document.getElementsByClassName('error').length === 0;
    if (isValidForm) {
        // Submit the form if all fields are valid
        document.getElementById('myForm').submit();
    }
}




function isValidEmail(email) {
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    // Basic phone number format validation (10 digits)
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}
