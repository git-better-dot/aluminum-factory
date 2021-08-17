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
  count++;
  if (count >= imag.length){
    count = 0;
    clearInterval(slide);
    reverse= setInterval(show2, 3800);

  }
}
function show2(){


  img.src = imag[count2-1];
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

let paragraphs = 
[ 
  'Folding windows consists of several panels whose frames are hinged to one another. It opens and closes by sliding horizontally, resembling an accordion. They are used where the opening is too wide for one or two segments, this arrangement allows the entire space to be opened.',
  'The “skin of architecture” is a core topic of modern construction. Building envelopes therefore deserve particular attention. They can be simple and functional, exciting and representative. The proportion, surface structure and colouring of façades lead to the creation of unique structures; their interplay characterizes the  Alucobond idea.', 
  'Pergolas have centuries behind them. With Italian essence ingrained in their distinct structures, they boast a creation dating back to medieval times. These charming, open-air structures are secured with four posts or columns and topped with cross-beams or lattices. The airy structures are commonly made of wood, vinyl, or aluminum. Pergolas are most often installed on pavers or a concrete patio. This allows for outdoor furniture and or grilling equipment to be placed underneath it. Pergolas are a great way to make a part of your backyard space a central hangout spot.', 
  'Sliding windows are believed to have been invented in the 17th century in Holland. Originally known as the Yorkshire sash window, sliding windows have existed and evolved for hundreds of years. Originally, horizontal sash sliding windows simply used interlocking wooden frames that would slide open. Today, the basic operation is the same, but modern sliding windows utilize low friction rolling sliders, allowing easy operation at the push of a finger. This simplicity makes them popular for hard-to-reach areas.',  ];
  
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


