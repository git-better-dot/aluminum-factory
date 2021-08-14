'use strict';
let reverse
let count = 0
let img = document.getElementById('main-img')
let imag = ['https://via.placeholder.com/1240x570.png/09f/fff',
 'https://via.placeholder.com/1240x570.png/09g/ggg',
 'https://via.placeholder.com/1240x570/99f/fff.png',
  'https://via.placeholder.com/1240x570/222222']
  let count2 = imag.length-1
img.src = imag[count]

let slide = setInterval(show, 3000)
console.log(imag.length)
function show(){
    
    
    img.src = imag[count]
    console.log( 'count '  + count)
    count++
    if (count >= imag.length){
        count = 0
        clearInterval(slide)
        reverse=  setInterval(show2, 3000)
        
    }
     }
    function show2(){
        
        
        img.src = imag[count2-1]
        console.log( 'count2 '  + count2)
        count2--
        if (count2 <=0 ){
            count2 = imag.length-1

            slide = setInterval(show, 3000)

            clearInterval(reverse)
        }
        
    }
    
let radio1 = document.getElementById('radio1')
let radio2 = document.getElementById('radio2')
let radio3 = document.getElementById('radio3')
let radio4 = document.getElementById('radio4')

radio1.addEventListener('click',function(){
    clearInterval(slide)
    clearInterval(reverse)

    count = 0
    img.src = imag[count]
    slide = setInterval(show, 3000)

})
radio2.addEventListener('click',function(){
    count = 1
    clearInterval(slide)
    clearInterval(reverse)
    img.src = imag[count]
    slide = setInterval(show, 3000)
    // radio1.removeEventListener()
    })
    radio3.addEventListener('click',function(){
        count = 2
        clearInterval(slide)
        clearInterval(reverse)
        img.src = imag[count]
        slide = setInterval(show, 3000)
        })
        radio4.addEventListener('click',function(){
            clearInterval(slide)
            clearInterval(reverse)
        
            count = 3
            img.src = imag[count]
            slide = setInterval(show, 3000)
        
        })
let click ;
        function plusDivs(){
            
            if(click==1){
                count ++
            }
            if (count == imag.length){
                count = 0   
            }
            img.src = imag[count]
            count++
            click = 0
            clearInterval(slide)
            clearInterval(reverse)
            count2 = imag.length-1

            slide = setInterval(show, 3000) 
            
        }
        function subDivs(){
           if(click==0){
               count --
           }

           if (count < 0){
            count = imag.length-1  
        }
            img.src = imag[count]
            count--
            click = 1

            clearInterval(slide)
            clearInterval(reverse)
            count2 = imag.length-1

            slide = setInterval(show, 3000)
            
        }