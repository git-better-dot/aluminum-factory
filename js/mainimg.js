'use strict';
let reverse;
let count = 0;
let img = document.getElementById('main-img');
let imag = ['../img/slide1.png', '../img/slide2.png', '../img/slide3.png', '../img/slide4.gif'];
let count2 = imag.length-1;
img.src = imag[count];

let slide = setInterval(show, 3000);
console.log(imag.length);
function show(){


  img.src = imag[count];
  console.log( 'count ' + count);
  count++;
  if (count >= imag.length){
    count = 0;
    clearInterval(slide);
    reverse= setInterval(show2, 3000);

  }
}
function show2(){


  img.src = imag[count2-1];
  console.log( 'count2 ' + count2);
  count2--;
  if (count2 <=0 ){
    count2 = imag.length-1;

    slide = setInterval(show, 3000);

    clearInterval(reverse);
  }

}

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let radio4 = document.getElementById('radio4');

radio1.addEventListener('click',function(){
  clearInterval(slide);
  clearInterval(reverse);

  count = 0;
  img.src = imag[count];
  slide = setInterval(show, 3000);

});
radio2.addEventListener('click',function(){
  count = 1;
  clearInterval(slide);
  clearInterval(reverse);
  img.src = imag[count];
  slide = setInterval(show, 3000);
  // radio1.removeEventListener()
});
radio3.addEventListener('click',function(){
  count = 2;
  clearInterval(slide);
  clearInterval(reverse);
  img.src = imag[count];
  slide = setInterval(show, 3000);
});
radio4.addEventListener('click',function(){
  clearInterval(slide);
  clearInterval(reverse);

  count = 3;
  img.src = imag[count];
  slide = setInterval(show, 3000);

});
let click ;
function plusDivs(){

  if(click==1){
    count ++;
  }
  if (count == imag.length){
    count = 0;
  }
  img.src = imag[count];
  count++;
  click = 0;
  clearInterval(slide);
  clearInterval(reverse);
  count2 = imag.length-1;

  slide = setInterval(show, 3000);

}

function subDivs(){
  if(click==0){
    count --;
  }

  if (count < 0){
    count = imag.length-1;
  }
  img.src = imag[count];
  count--;
  click = 1;

  clearInterval(slide);
  clearInterval(reverse);
  count2 = imag.length-1;

  slide = setInterval(show, 3000);

}

// For products and services
let divCount = 0;
let h2 = document.getElementById('servicesHeader');
let p = document.getElementById('servicesPara');
let servicesimg = document.getElementById('sideImage');

let headers = ['Alucobond', 'Chemistry', 'physics', 'mathematics'];
let paragraphs = [
  'Alucobond is a composite panel consisting of two aluminum cover sheets and a fire-retardant or non-combustible mineral-filled core that stands for sustainable construction quality and the highest creative standards.',
  'the branch of science concerned with the substances of which matter is composed, the investigation of their properties and reactions, and the use of such reactions to form new substances.',
  'the branch of science concerned with the nature and properties of matter and energy. The subject matter of physics includes mechanics, heat, light and other radiation, sound, electricity, magnetism, and the structure of atoms.',
  'the abstract science of number, quantity, and space, either as abstract concepts ( pure mathematics ), or as applied to other disciplines such as physics and engineering ( applied mathematics ).',];
let productsImages = ['./img/p1.png', 'https://via.placeholder.com/450x300/393E46', 'https://via.placeholder.com/450x300/FF5722', 'https://via.placeholder.com/450x300/000'];

function divPlusDivs(){

  if(click===1){
    divCount ++;
  }
  if (divCount === headers.length){
    divCount = 0;
  }
  h2.textContent = headers[divCount];
  p.textContent = paragraphs[divCount];
  servicesimg.src = productsImages[divCount];
  divCount++;
  click = 0;
}

function divSubDivs(){
  if(click===0){
    divCount --;
  }

  if (divCount < 0){
    divCount = headers.length-1;
  }
  h2.textContent = headers[divCount];
  p.textContent = paragraphs[divCount];
  servicesimg.src = productsImages[divCount];
  divCount--;
  click = 1;
}


