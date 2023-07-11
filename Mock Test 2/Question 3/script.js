// Fetch data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    hideSkeletonLoader(); // Hide skeleton loader
    displayUsers(data); // Display user data
  })
  .catch(error => {
    console.log('An error occurred while fetching data:', error);
  });

function hideSkeletonLoader() {
  var skeletonLoader = document.getElementById('skeleton-loader');
  skeletonLoader.style.display = 'none';
}

function displayUsers(users) {
  var userList = document.getElementById('user-list');

  // Create a list item for each user
  users.forEach(user => {
    var userCard = document.createElement('div');
    userCard.classList.add('user-card');

    var name = document.createElement('h3');
    name.innerText = user.name;

    var username = document.createElement('p');
    username.innerText = 'Username: ' + user.username;

    var email = document.createElement('p');
    email.innerText = 'Email: ' + user.email;

    var phone = document.createElement('p');
    phone.innerText = 'Phone: ' + user.phone;

    userCard.appendChild(name);
    userCard.appendChild(username);
    userCard.appendChild(email);
    userCard.appendChild(phone);

    userList.appendChild(userCard);
  });

  userList.style.display = 'block'; // Show user list
}
