if (localStorage.getItem('users') == null) {
  localStorage.setItem('users', '[]');
}
let usersOfTheSite = JSON.parse(localStorage.users);
console.log(usersOfTheSite);
console.log(localStorage.cart2);
if (localStorage.getItem('usermsg') == null) {
  localStorage.setItem('usermsg', '[]');
}
let questionsMsgs = JSON.parse(localStorage.usermsg); //this will make problem if u let it without use
console.log(localStorage.usermsg);

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
let arryofawsners = [];
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
  let arrayheader = ['UserName', 'E-Mail', 'Gender', 'Question', 'Answer'];
  let tr1 = document.createElement('tr');
  userTable.appendChild(tr1);
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

function render1() {

  for (let i = 0; i < questionsMsgs.length; i++) {
    arryOfCtys[i] = questionsMsgs[i][0].country;
    console.log(arryOfCtys[i]);
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
  let arrayheader1 = ['Country', 'Enquiry', 'First name', 'Last name', 'Phone number', 'E-Mail', 'Message'];
  let tr0 = document.createElement('tr');
  msgTable.appendChild(tr0);
  for (let i = 0; i < arrayheader1.length; i++) {
    let th1 = document.createElement('th');
    th1.textContent = arrayheader1[i];
    tr0.appendChild(th1);
  }
  let tbody = document.createElement('tbody');
  msgTable.appendChild(tbody);
  for (let i = 0; i < questionsMsgs.length; i++) {


    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let td1 = document.createElement('td');
    td1.textContent = arryOfCtys[i];
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = arryofEnq[i];
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.textContent = arryofFname[i];
    tr.appendChild(td3);
    let td4 = document.createElement('td');
    td4.textContent = arryofLname[i];
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

  let tfooter = document.createElement('tfoot');
  msgTable.appendChild(tfooter);
  let button = document.createElement('button');
  button.innerHTML = 'Clear Messeges';
  button.setAttribute('id', 'ClearMessegesBtn');
  tfooter.appendChild(button);
  button.onclick = function () {
    localStorage.setItem('usermsg', '[]');
    msgTable.removeChild(tbody);
    msgTable.removeChild(tfooter);
  };
  

  document.getElementById('msgButton').remove();

}





let namecahrt = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8'];

if (localStorage.cart3) {
  let productarr = JSON.parse(localStorage.getItem('cart3'));
  console.log(productarr);
  let ctx = document.getElementById('myChart').getContext('2d');

  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namecahrt,
      datasets: [{
        label: '# click',
        data: productarr,
        backgroundColor: '#3C8DAD',
        borderColor: '#F5A962',
        // backgroundColor:
        //         '#125D98',

        // borderColor:
        //   '#DDDDDD'

        borderWidth: 2,
        order: 2,
        font: {
          size: 30
        }
      },
        //    {
        //     label: '# shown',
        //     data: shownArr,
        //     hoverBackgroundColor: '#125D98',
        //     hoverBorderColor: '#DDDDDD',

        //     borderWidth: 2,
        //     // type: 'line',
        //     // this dataset is drawn on top
        //     order: 1
        //   }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            // This more specific font property overrides the global property
            font: {
              size: 20
            },
            color: 'black',
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'black',
            stepSize: 1,
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function clearcart() {
  localStorage.removeItem('cart3');
}


