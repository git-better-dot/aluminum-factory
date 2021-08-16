let usersOfTheSite = JSON.parse(localStorage.users);
console.log(usersOfTheSite)
console.log(localStorage.cart2)

// let questionsMsgs = JSON.parse(localStorage.usermsg); //this will make problem if u let it without use
console.log(localStorage.usermsg)

// let cartsForUser = JSON.parse(localStorage.cart2); //this will make problem if u let it without use

const usersAccount = document.getElementById('usersAccount');
let userTable = document.createElement('table');
usersAccount.appendChild(userTable);
userTable.setAttribute('id', 'userTable');
const cartTable = document.createElement('table');
cartTable.setAttribute('id', 'cartTable');
let arryOfUsernames = [];
let arryofemails = [];
let arryofgenders = [];
let arryofques = [];
let arryofawsners = []


function render() {

    for (let i = 0; i < usersOfTheSite.length; i++) {
        arryOfUsernames[i] = usersOfTheSite[i][0].username;
    }
    for (let i = 0; i < usersOfTheSite.length; i++) {
        arryofemails[i] = usersOfTheSite[i][0].email;
    }
    for (let i = 0; i < usersOfTheSite.length; i++) {
        arryofgenders[i] = usersOfTheSite[i][0].gender;
    }
    for (let i = 0; i < usersOfTheSite.length; i++) {
        arryofques[i] = usersOfTheSite[i][0].question;
    }
    for (let i = 0; i < usersOfTheSite.length; i++) {
        arryofawsners[i] = usersOfTheSite[i][0].answer;
    }
    let arrayheader = ['UserName', 'e-Mail', 'Gender','Question','Answer'];
    let tr1 = document.createElement('tr');
    userTable.appendChild(tr1)
    for (let i = 0; i < arrayheader.length; i++) {
        let th = document.createElement('th');
        th.textContent = arrayheader[i];
        tr1.appendChild(th);
    }
    


    for (let i = 0; i < usersOfTheSite.length; i++) {
        let tr2 = document.createElement('tr');
        userTable.appendChild(tr2);
        let td1 = document.createElement('td');
        td1.textContent = arryOfUsernames[i];
        tr2.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = arryofemails[i];
        tr2.appendChild(td2);
        let td3 = document.createElement('td');
        td3.textContent = arryofgenders[i];
        tr2.appendChild(td3);
        let td4 = document.createElement('td');
        td4.textContent = arryofques[i];
        tr2.appendChild(td4);
        let td5 = document.createElement('td');
        td5.textContent = arryofawsners[i];
        tr2.appendChild(td5);
    }
    document.getElementById('tableButton').remove();
}