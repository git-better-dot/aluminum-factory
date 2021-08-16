let numquantity; // determine the image
arrquantity = JSON.parse(localStorage.getItem('cart')) || [];
let form; // create form
let num = 0 ;//
let count = 0;// remove the form when change picture

let img1 = document.getElementById('firstimg');

img1.addEventListener('click', addquentity);
function addquentity(event) {
  numquantity = 0;
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img1.appendChild(form);
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[0] || 0;
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img4.addEventListener('click', addquentity4);
  img2.addEventListener('click', addquentity2);
  img3.addEventListener('click', addquentity3);
  img1.removeEventListener('click', addquentity);
  form.addEventListener('submit', quentity);


}
//#######################################################
//#######################################################

let img2 = document.getElementById('secondimg');
img2.addEventListener('click', addquentity2);
function addquentity2(event) {

  numquantity = 1;

  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img2.appendChild(form);
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[1] || 0;
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img4.addEventListener('click', addquentity4);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img2.removeEventListener('click', addquentity2);
  form.addEventListener('submit', quentity);


}
//#######################################################
//#######################################################

let img3 = document.getElementById('thirdimg');
img3.addEventListener('click', addquentity3);
function addquentity3(event) {
  numquantity = 2;

  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img3.appendChild(form);
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[2] || 0;
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img4.addEventListener('click', addquentity4);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.removeEventListener('click', addquentity3);
  form.addEventListener('submit', quentity);
}
//#######################################################
//#######################################################

let img4 = document.getElementById('fourthimg');
img4.addEventListener('click', addquentity4);
function addquentity4(event) {
  numquantity = 3;
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img4.appendChild(form);
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[3] || 0;
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img4.removeEventListener('click', addquentity4);
  form.addEventListener('submit', quentity);
}

function quentity(event) {

  event.preventDefault();
  num = parseInt(event.target.imag1.value);
  arrquantity[numquantity] = num;
  localStorage.cart = JSON.stringify(arrquantity);
  form.reset();
  img4.addEventListener('click', addquentity4);
  img3.addEventListener('click', addquentity3);
  img1.addEventListener('click', addquentity);
  img2.addEventListener('click', addquentity2);
}

