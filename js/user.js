let userName, passWord, userNameS, passWordS, email, gender, question, anwser;
let LoginForm = document.getElementById('LoginForm');
let SingUpForm = document.getElementById('SingUpForm');
const buttonsSection = document.getElementById('buttonsSection');
//this funtion is a on click funtion to log in button it will show the log in form and hide the buttonsSection div

function myLogInFunction() {
  document.getElementById('LoginForm').style.display = 'block';
  buttonsSection.style.display = 'none';
}

//this funtion saves the valuse in the username field and password filed in the form btw you have to call it later
function mySignUpFunction() {
  document.getElementById('SingUpForm').style.display = 'block';
  buttonsSection.style.display = 'none';
}
//this funtion is a on click funtion to the close button on the form it will hide the form and display the buttonsSection div

function closeForm() {
  document.getElementById('SingUpForm').style.display = 'none';
  document.getElementById('LoginForm').style.display = 'none';
  buttonsSection.style.display = 'inline';
}

function getValuesLogin() {
  userName = document.getElementById('username').value;
  passWord = document.getElementById('password').value;
}

function displayRadioValue() {
  if (document.getElementById('Gender').value === 'Male') {
    gender = 'Male';
  } else
    gender = 'Female';
  return gender;
}

function getValuesSignUp() {
  userNameS = document.getElementById('usernameS').value;
  passWordS = document.getElementById('passwordS').value;
  email = document.getElementById('EmailS').value;
  displayRadioValue();
  question = document.getElementById('Questions').value;
  anwser = document.getElementById('yourAnwser').value;
}

LoginForm.addEventListener('submit', submitHandler);
//this is a submit handler for the form
function submitHandler(event) {
  event.preventDefault();


  //here we called the getvaluse funtion and saved the username and password
  getValuesLogin();
  console.log(userName);
  console.log(passWord);
  userLogChecked();
  //now you have to put a if statment to compare the saved username and password from the sign up
  //to the ones entered in the log in from


  //here we hide the log in form after submiting
  document.getElementById('LoginForm').style.display = 'none';
  //here we showed the buttonsSection div and added a p tag with the username in it to the buttonsSection div
  buttonsSection.style.display = 'inline';
  let userNameInbuttonsSections = document.createElement('p');
  userNameInbuttonsSections.textContent = userName;
  userNameInbuttonsSections.setAttribute('id', 'LoginName');
  let profilepic = './img/' + 'profile 50px.png';
  let profilepicElement = document.createElement('img');
  profilepicElement.setAttribute('src', profilepic);
  profilepicElement.setAttribute('alt', 'na');
  profilepicElement.setAttribute('height', '35px');
  profilepicElement.setAttribute('id', 'LoginPic');
  buttonsSection.appendChild(profilepicElement);
  buttonsSection.appendChild(userNameInbuttonsSections);

  //here we hide the log in and sign up buttons
  document.getElementById('logInBtn').style.display = 'none';
  document.getElementById('SignUpBtn').style.display = 'none';
  //here we stoped the page from reloading


}
SingUpForm.addEventListener('submit', submitHandler1);

function submitHandler1(event) {
  event.preventDefault();
  getValuesSignUp();

  let sendtoStorage = JSON.stringify(UsersData.allUsers);
  localStorage.usersInfo = sendtoStorage;

  savedUsers();

  //   console.log(userNameS);
  //   console.log(passWordS);
  //   console.log(email);
  //   console.log(gender);
  //   console.log(question);
  //   console.log(anwser);
}


function UsersData(username, password, email, gender, question, answer) {
  this.username = username;
  this.password = password;
  this.email = email;
  this.gender = gender;
  this.question = question;
  this.answer = answer;
  UsersData.allUsers.push(this);
}

UsersData.allUsers = [];


function savedUsers() {
  if (localStorage.usersInfo) {

    let lastUser = JSON.parse(localStorage.usersInfo);
    for (let i = 0; i < lastUser.length; i++) {
      new UsersData(lastUser[i].username, lastUser[i].password, lastUser[i].email, lastUser[i].gender, lastUser[i].question, lastUser[i].answer);
    }
  }
}






// function userLogChecked() {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].Username == userName && users[i].Password == passWord) {
//       alert('You are loged in.');
//     } else {
//       alert('ERROR.');
//     }

//   }
// }
