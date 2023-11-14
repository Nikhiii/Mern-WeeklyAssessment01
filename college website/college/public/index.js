document.getElementById('enroll-button').addEventListener('click', function() {
    // Create a pop-up form for enrolling a student
    var popup = document.createElement('div');
    popup.className = 'popup';

    var form = document.createElement('form');
    form.className = 'popup-form';
    form.innerHTML = `
       <h3>Enroll Now</h3>
       <!-- Fill in: Add a label and input field for 'Name' -->
       <!-- Fill in: Add a label and input field for 'Email' -->
       <!-- Fill in: Add a 'Enroll' button -->
       <!-- Fill in: Add a 'Cancel' button -->
    `;

    // Prevent clicking outside the form from closing the pop-up
    form.addEventListener('click', function(event) {
       event.stopPropagation();
    });

    // Close the pop-up when the form is submitted
    form.addEventListener('submit', function(event) {
       event.preventDefault();
       // Fill in: Get the values of 'Name' and 'Email' input fields
       // Fill in: Perform enrollment logic here
       // Fill in: Display a success message with name and email
       // Fill in: Close the pop-up
    });

    popup.appendChild(form);
    document.body.appendChild(popup);

    // Function to close the pop-up
    function closePopup() {
       // Fill in: Remove the pop-up from the document
    }
});
