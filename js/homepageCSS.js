'use strict';

window.onscroll = function() {stickyHeader();};

let header = document.getElementById('mainHeader');
let sticky = header.offsetTop + 70;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
