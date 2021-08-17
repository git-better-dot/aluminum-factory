let country, Enquiry, fName, lName, Phone, Email, message;
let contactusForm = document.getElementById('contactusForm');
// console.log(1);

function getContactValue() {
    country = document.getElementById('country').value;
    Enquiry = document.getElementById('ProductEnquiry').value;
    fName = document.getElementById('FirstName').value;
    lName = document.getElementById('LastName').value;
    Phone = document.getElementById('Phone').value;
    Email = document.getElementById('Email').value;
    message = document.getElementById('message').value;
}
contactusForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    getContactValue();
    console.log(country);

    savedUserMsg();
    Swal.fire(
        'Thanks For Contacting Us ',
        'We Will Get In Contact With You Very Soon',
        'success'
    )
}

function UsersMsg(country, Enquiry, fName, lName, Phone, Email, message) {
    this.country = country;
    this.Enquiry = Enquiry;
    this.fName = fName;
    this.lName = lName;
    this.Phone = Phone;
    this.Email = Email;
    this.message = message;
}

let usersMsgArry = [];

function savedUserMsg() {



    let Arrs = [];
    if (localStorage.usermsg == null) {
        localStorage.setItem('usermsg', '[]');
    }
    usersMsgArry = JSON.parse(localStorage.getItem('usermsg'));
    Arrs.push(new UsersMsg(country, Enquiry, fName, lName, Phone, Email, message));
    console.log(Arrs);

    usersMsgArry.push(Arrs);
    localStorage.usermsg = JSON.stringify(usersMsgArry);
}