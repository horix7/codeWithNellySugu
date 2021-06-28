

const fetchUserData = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    const UserElement = document.querySelector('#userList');

    json.forEach(element => {
      console.log(element)
      UserElement.innerHTML +=  `
        <li class="userCard">
        <div class="user-info"> <i class="far fa-user big-icon"></i> 
        <div> <span class="user-name"> ${element.name} </span> <br/> <i class="far fa-envelope-open"></i>  &nbsp; ${element.email} </div>
        </div>

        <button id=\"${element.id}\" class="view-more"  name=\"${element.name + "++" + element.email}\" onclick="fetchUserPosts(${element.id})"> View Posts </button>
        </li>
      `
      return
    });
}
 );
}

const fetchUserPosts = (user_id) => {


  const loadingBtn = document.getElementById(user_id)
  const name = loadingBtn.name.split("++")[0]
  const email = loadingBtn.name.split("++")[1]

  loadingBtn.innerHTML = `<div class="loader"></div>`

  fetch('https://jsonplaceholder.typicode.com/posts?userId=' +  user_id)
  .then((response) => response.json())
  .then((json) => {
    const root = document.querySelector(".root")
    root.innerHTML = `
    <div class="userPosts">
      <div class="user-info"> <i class="far fa-user big-icon"></i> 
      <div> <span class="user-name"> ${name} </span> <br/> <i class="far fa-envelope-open"></i>  &nbsp; ${email} <div class="end"> ${json.length} Posts</div> </div>
    </div>

    <ul class="post">
       
    </ul>
  </div>
    `
    const posts = document.querySelector(".post")
    json.forEach(elem => {
      posts.innerHTML += `<li class="post"> 
        <div> <h2>${elem.title} </h2> <br /> <p> ${elem.body} </p> </div>
      </li>`
    })
  })
}

const changeSubtextBackground = () => {
  const subtext = document.querySelector('#subtext');
  subtext.setAttribute('style', "background-color: blue" );
}

fetchUserData()


