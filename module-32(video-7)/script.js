//* CLEAR
const clearAll = () => {
  // ?Comments
  const commentSection = document.getElementById("comment-section");
  commentSection.innerHTML = "";

  // ?Users
  const usersSection = document.getElementById("user-section");
  usersSection.innerHTML = "";
};

//* COMMENTS
const loadComments = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      displayComments(data);
    });
};

const displayComments = (comments) => {
  const commentSection = document.getElementById("comment-section");
  commentSection.innerHTML = "";

  comments.forEach(comment => {
    // console.log(comment);

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-box")
    commentDiv.innerHTML = `
    <h3 class="name">${comment.name}</h3>
      <p class="email">${comment.email}</p>
      <p class="description">${comment.body}</p>
    `;

    commentSection.append(commentDiv);
  });
};

//* USERS
const loadUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      displayUsers(data)
    });
}

const displayUsers = (users) => {
  const usersSection = document.getElementById("user-section");
  usersSection.innerHTML = "";

  users.forEach(user => {
    // console.log(user);

    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <div class="user-card comment-box">
      <h2 class="name">${user.name}</h2>
      <p class="username">${user.username}</p>
      <p class="email">${user.email}</p>

      <div class="address">

        
        <div class="address-detail">
          <h3 class="name">Address</h3>
          <p>Street: ${user.address.street}</p>
          <p>Suite: ${user.address.suite}</p>
          <p>City: ${user.address.city}</p>
          <p>Zipcode: ${user.address.zipcode}</p>
        </div>

        <div class="geo">
          <p>Lat: ${user.address.geo.lat}</p>
          <p>Lng: ${user.address.geo.lng}</p>
        </div>

      </div>
    </div>
        `

    usersSection.append(userDiv);
  });
}