function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    if (phone.length != 10) {
        alert("Please Provide Correct Phone Number");
        return false;
    }

    if (password.length != 8) {
        alert("Password must 8 character long");
        return false;
    }

    if (age === "") {
        alert("Age must be filled out");
        return false;
    }

    if (gender === "") {
        alert("Please select a gender");
        return false;
    }
}