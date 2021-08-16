'use strict';
let reverse;
let count = 0;
let img = document.getElementById('main-img');
let imag = ['./img/slide1.png', './img/slide2.png', './img/slide3.png', './img/slide4.gif'];
let count2 = imag.length-1;
img.src = imag[count];

let slide = setInterval(show, 3800);
console.log(imag.length);
function show(){


  img.src = imag[count];
  console.log( 'count ' + count);
  count++;
  if (count >= imag.length){
    count = 0;
    clearInterval(slide);
    reverse= setInterval(show2, 3800);

  }
}
function show2(){


  img.src = imag[count2-1];
  console.log( 'count2 ' + count2);
  count2--;
  if (count2 <=0 ){
    count2 = imag.length-1;

    slide = setInterval(show, 3800);

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
  slide = setInterval(show, 3800);

});
radio2.addEventListener('click',function(){
  count = 1;
  clearInterval(slide);
  clearInterval(reverse);
  img.src = imag[count];
  slide = setInterval(show, 3800);
  // radio1.removeEventListener()
});
radio3.addEventListener('click',function(){
  count = 2;
  clearInterval(slide);
  clearInterval(reverse);
  img.src = imag[count];
  slide = setInterval(show, 3800);
});
radio4.addEventListener('click',function(){
  clearInterval(slide);
  clearInterval(reverse);

  count = 3;
  img.src = imag[count];
  slide = setInterval(show, 3800);

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

  slide = setInterval(show, 3800);

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

  slide = setInterval(show, 3800);

}

// For products and services
let divCount = 0;
let h2 = document.getElementById('servicesHeader');
let p = document.getElementById('servicesPara');
let servicesimg = document.getElementById('sideImage');

let headers = ['Folding Windows', 'Alucobond', 'Pergola Shutters', 'Slide-Up Windows'];

let paragraphs = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi soluta dolor explicabo. Laborum fuga dolor quibusdam illum quaerat aperiam saepe veniam assumenda provident itaque porro odio similique voluptatibus, maxime sint dolores atque! Nostrum necessitatibus unde, placeat dignissimos, repellendus quo est quasi autem inventore voluptates, alias suscipit blanditiis laudantium voluptas. Aperiam.',];
let productsImages = ['./img/companyP/pl5.png', './img/companyP/pl3.png', './img/companyP/pl4.png', './img/companyP/pl1.png'];

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


