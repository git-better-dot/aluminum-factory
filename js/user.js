let userName, passWord, userNameS, passWordS, email, gender, question, anwser;
let LoginForm = document.getElementById('LoginForm');
let SingUpForm = document.getElementById('SingUpForm');
const buttonsSection = document.getElementById('buttonsSection');
let arryOfUsers = [];
let arryOfPasswords = [];
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
    if (document.getElementById('malexx').checked === true) {
        gender = 'Male';
        alert("male");
        return gender;

    } else if (document.getElementById('femalexx').checked === true){
        gender = 'Female';
        alert("female");
        return gender;
    }
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

function submitHandler(event) {
    event.preventDefault();
    let x = JSON.parse(localStorage.users);
    getValuesLogin();
    for (let i = 0; i < x.length; i++) {
        arryOfUsers[i] = x[i][0].username;
    }
    for (let i = 0; i < x.length; i++) {
        arryOfPasswords[i] = x[i][0].password;
    }
    console.log(arryOfUsers);
    console.log(arryOfPasswords);
    console.log(userName);
    console.log(passWord);
    for (let i = 0; i < x.length + 1; i++) {
        console.log(arryOfUsers[i])
        if (userName == arryOfUsers[i] && passWord == arryOfPasswords[i]) {

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
            break;
        } else if (i == x.length) {
            alert('Wrong Username or password !!!')
            break;
        }


    }
}
SingUpForm.addEventListener('submit', submitHandler1);

function submitHandler1(event) {
    event.preventDefault();
    getValuesSignUp();


    savedUsers();
    //here we hide the log in form after submiting
    document.getElementById('LoginForm').style.display = 'none';
    //here we showed the buttonsSection div and added a p tag with the username in it to the buttonsSection div
    buttonsSection.style.display = 'inline';
    let userNameInbuttonsSections = document.createElement('p');
    userNameInbuttonsSections.textContent = userNameS;
    userNameInbuttonsSections.setAttribute('id', 'LoginName');
    let profilepic = './img/' + 'profile 50px.png';
    let profilepicElement = document.createElement('img');
    profilepicElement.setAttribute('src', profilepic);
    profilepicElement.setAttribute('alt', 'na');
    profilepicElement.setAttribute('height', '35px');
    profilepicElement.setAttribute('id', 'LoginPic');
    buttonsSection.appendChild(profilepicElement);
    buttonsSection.appendChild(userNameInbuttonsSections);


    document.getElementById('logInBtn').style.display = 'none';
    document.getElementById('SignUpBtn').style.display = 'none';

    document.getElementById('SingUpForm').style.display = 'none';

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



let usersArry = [];

function Userscart(x, y) {
    x = username;
    y = [];
}
console.log('hi')

function savedUsers() {


    let userData = new UsersData(userNameS, passWordS, email, gender, question, anwser);
    let Arr = [];
    if (localStorage.users == null) {
        localStorage.setItem('users', '[]');
    }
    usersArry = JSON.parse(localStorage.getItem('users'));

    Arr.push(userData = new UsersData(userNameS, passWordS, email, gender, question, anwser));
    console.log(Arr);
    usersArry.push(Arr);

    localStorage.users = JSON.stringify(usersArry);
}