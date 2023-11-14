function validateForm(event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  let valid = true;

  if (nameInput.value.trim() === "") {
    valid = false;
    alert("Please enter your name.");
  }

  if (!isValidEmail(emailInput.value.trim())) {
    valid = false;
    alert("Please enter a valid email address.");
  }

  if (messageInput.value.trim() === "") {
    valid = false;
    alert("Please enter a message.");
  }

  if (!valid) {
    event.preventDefault();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
