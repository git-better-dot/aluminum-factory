let Location, Enquiry, fName, lName, Phone, Email, message;
let contactusForm = document.getElementById('contactusForm');
// console.log(1);

function getContactValue() {
    Location = document.getElementById('country').value;
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
    localStorage.usermsg = 'Location  :' + Location + ' Enquiry  :' + Enquiry + ' firstName  :' + fName + ' lName  :' + lName + ' Phone  :' + Phone + ' Email  :' + Email + ' message  :' + message;
}