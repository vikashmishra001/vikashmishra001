document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var website = document.getElementById('website').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Clear form fields
    document.getElementById('website').value = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    // Create password item
    var passwordItem = document.createElement('li');
    passwordItem.innerHTML = '<span>Website:</span> ' + website + ' | <span>Username:</span> ' + username + ' | <span>Password:</span> ' + password;

    // Append to password list
    document.getElementById('passwords').appendChild(passwordItem);
});
