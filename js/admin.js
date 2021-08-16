let usersOfTheSite = JSON.parse(localStorage.users);
console.log(usersOfTheSite)
console.log(localStorage.cart2)

let questionsMsgs = JSON.parse(localStorage.usermsg);
console.log(localStorage.usermsg)

let cartsForUser = JSON.parse(localStorage.cart2);

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
const msgSec = document.getElementById('userMsgs');
let msgTable = document.createElement('table');
msgSec.appendChild(msgTable);
msgTable.setAttribute('id', 'userTable');
let arryOfCtys = [];
let arryofEnq = [];
let arryofFname = [];
let arryofLname = [];
let arryofPhoneNo = [];
let arryofEmls = [];
let arryofMesseges = [];


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

    let th = document.createElement('thead');
    th.textContent = 'Users';
    userTable.appendChild(th);
    for (let i = 0; i < usersOfTheSite.length; i++) {


        let tr = document.createElement('tr');
        th.appendChild(tr)
        let td1 = document.createElement('td');
        td1.textContent = arryOfUsernames[i]
        tr.appendChild(td1)
        let td2 = document.createElement('td');
        td2.textContent = arryofemails[i]
        tr.appendChild(td2)
        let td3 = document.createElement('td');
        td3.textContent = arryofgenders[i]
        tr.appendChild(td3)
        let td4 = document.createElement('td');
        td4.textContent = arryofques[i]
        tr.appendChild(td4)
        let td5 = document.createElement('td');
        td5.textContent = arryofawsners[i];
        tr.appendChild(td5)
    }

}

function render1() {

    for (let i = 0; i < questionsMsgs.length; i++) {
        arryOfCtys[i] = questionsMsgs[i][0].country;
        console.log(arryOfCtys[i])
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofEnq[i] = questionsMsgs[i][0].Enquiry;
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofFname[i] = questionsMsgs[i][0].fName;
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofLname[i] = questionsMsgs[i][0].lName;
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofPhoneNo[i] = questionsMsgs[i][0].Phone;
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofEmls[i] = questionsMsgs[i][0].Email;
    }
    for (let i = 0; i < questionsMsgs.length; i++) {
        arryofMesseges[i] = questionsMsgs[i][0].message;
    }


    let th = document.createElement('thead');
    th.textContent = 'hi';
    msgTable.appendChild(th);
    for (let i = 0; i < questionsMsgs.length; i++) {


        let tr = document.createElement('tr');
        th.appendChild(tr);
        let td1 = document.createElement('td');
        td1.textContent = arryOfCtys[i]
        tr.appendChild(td1);
        let td2 = document.createElement('td');
        td2.textContent = arryofEnq[i]
        tr.appendChild(td2);
        let td3 = document.createElement('td');
        td3.textContent = arryofFname[i]
        tr.appendChild(td3);
        let td4 = document.createElement('td');
        td4.textContent = arryofLname[i]
        tr.appendChild(td4);
        let td5 = document.createElement('td');
        td5.textContent = arryofPhoneNo[i];
        tr.appendChild(td5);
        let td6 = document.createElement('td');
        td6.textContent = arryofEmls[i];
        tr.appendChild(td5);
        let td7 = document.createElement('td');
        td7.textContent = arryofMesseges[i];
        tr.appendChild(td5);
    }
}