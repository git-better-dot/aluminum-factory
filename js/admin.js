

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


let namecahrt = ['product1', 'product2', 'product3', 'product4','product5','product6','product7','product8'];

if(localStorage.cart3){
    let productarr = JSON.parse(localStorage.getItem('cart3')) 
  console.log(productarr)
let ctx = document.getElementById('myChart').getContext('2d');

  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namecahrt,
      datasets: [{
        label: '# click',
        data: productarr,
        backgroundColor:
          '#3C8DAD',
        borderColor:
          '#F5A962',
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
            }, color: 'black'
            ,
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "black",
            stepSize: 1,
            beginAtZero: true
          }
        }]
      }
    }
  })};

  function clearcart(){
      localStorage.removeItem('cart3')
  }