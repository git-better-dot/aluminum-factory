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
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

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
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

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
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

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
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

  form.addEventListener('submit', quentity);
}
//#######################################################
//#######################################################

let img5 = document.getElementById('fifthimg');//*** */
img5.addEventListener('click', addquentity5);//*** */
function addquentity5(event) {//*** */
  numquantity = 4;//*** */
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img5.appendChild(form);//*** */
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[4] || 0;
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img4.addEventListener('click', addquentity4);
  img5.removeEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

  form.addEventListener('submit', quentity);
}
//#######################################################
//#######################################################

let img6 = document.getElementById('sixthimg');//*** */
img6.addEventListener('click', addquentity6);//*** */
function addquentity6(event) {//*** */
  numquantity = 5;//*** */
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img6.appendChild(form);//*** */
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[5] || 0;//*** */
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img4.addEventListener('click', addquentity4);
  img5.addEventListener('click', addquentity5);
  img6.removeEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

  form.addEventListener('submit', quentity);
}
//#######################################################
//#######################################################

let img7 = document.getElementById('seventhimg');//*** */
img7.addEventListener('click', addquentity7);//*** */
function addquentity7(event) {//*** */
  numquantity = 6;//*** */
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img7.appendChild(form);//*** */
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[6] || 0;//*** */
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img4.addEventListener('click', addquentity4);
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.removeEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);

  form.addEventListener('submit', quentity);
}
//#######################################################
//#######################################################

let img8 = document.getElementById('eighthimg');//*** */
img8.addEventListener('click', addquentity8);//*** */
function addquentity8(event) {//*** */
  numquantity = 7;//*** */
  if (count > 0) {
    form.remove();
  }
  count++;
  event.preventDefault();
  form = document.createElement('form');
  form.id = 'add';
  img8.appendChild(form);//*** */
  let label = document.createElement('label');
  label.for = 'imag1';
  label.textContent = 'add quantity';
  form.appendChild(label);
  let input = document.createElement('input');
  input.type = 'text';
  input.id = 'imag1';
  input.placeholder = arrquantity[7] || 0;//*** */
  form.appendChild(input);
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'add cart';
  form.appendChild(submit);
  img2.addEventListener('click', addquentity2);
  img1.addEventListener('click', addquentity);
  img3.addEventListener('click', addquentity3);
  img4.addEventListener('click', addquentity4);
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.removeEventListener('click', addquentity8);

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
  img5.addEventListener('click', addquentity5);
  img6.addEventListener('click', addquentity6);
  img7.addEventListener('click', addquentity7);
  img8.addEventListener('click', addquentity8);


}
//#################################################################
//#################################################################
let section = document.querySelectorAll('.main-container');
let p = document.createElement('p');
function filter(){

  let filterValue, input,i;
  let error = 0;

  for (let j =0;j<section.length;j++){
    let div = section[j].getElementsByTagName('DIV');
    let input = document.getElementById('search');
    filterValue = input.value.toUpperCase();

    for (i = 0 ; i < div.length ; i=i+5){

      h = div[i].getElementsByTagName('h2')[0];
      if(h.innerHTML.toUpperCase().indexOf(filterValue) > -1 ){
        div[i].style.display = '';
        p.remove();
        // error = 0
      }


      else {
        error++;
        div[i].style.display = 'none';

      }}}

  if(error == 8){
    console.log(error);
    p.innerText =' this item not avalibale';
    p.id = 'avalibale';
    section[0].appendChild(p);
  }}


// //#################################################################
// //#################################################################

let pricenumber = [];
function search(){
  for (let j =0;j<section.length;j++){
    let div = section[j].getElementsByTagName('DIV');
    for (i = 0 ; i < div.length ; i=i+5){
      price = div[i].querySelector('p.price');
      let pricearr =  price.innerHTML.split(' ');
      pricearr.splice(0,1);
      pricearr.splice(1,1);
      pricenumber.push(Number(pricearr));
    }
  }}
search();
let max;
let min;
let newfliter ;

function filterprice(){
  p.remove();

  let rd1 = document.getElementById('rd1');
  let rd2 = document.getElementById('rd2');
  if(rd1.checked==true){
    max = 19;
    min = 0;

  }
  if(rd2.checked==true){
    max = 30;
    min = 20;

  }
  newfliter= pricenumber.filter(function(value){
    return (value<=max && value>=min);
  });
  for (let j =0;j<section.length;j++){
    let div = section[j].getElementsByTagName('DIV');
    for (i = 0 ; i < div.length ; i=i+5){
      price = div[i].querySelector('p.price');
      let pricearr =  price.innerHTML.split(' ');
      pricearr.splice(0,1);
      pricearr.splice(1,1);
      pricearr = Number(pricearr);
      if(newfliter.includes(pricearr)){
        div[i].style.display = '';
      }
      else{
        div[i].style.display = 'none';
      }

    }}}


