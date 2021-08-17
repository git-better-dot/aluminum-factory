const cartItems = JSON.parse(localStorage.getItem('cart')) || []
table = document.querySelector('tbody')
tfoot = document.querySelector('tfoot')
let name = ['product1', 'product2', 'product3', 'product4','product5','product6','product7','product8'];
let cartuser = [0,0,0,0,0,0,0,0]
let price = [25,23,28,19,16,18,15,16]
let total = 0 ;
if(localStorage.cart3){
  cartuser = JSON.parse(localStorage.getItem('cart3')) 
}

console.log(cartuser)
for (let i =0;i<cartItems.length;i++){
  cartuser[i] += cartItems[i]
}
console.log(cartuser)
for (let i =0;i<cartItems.length+1;i++){
   let cut= cartItems.indexOf(0)
   if(cut==-1){
     
     cut = 10
     break;
    }
    cartItems.splice(cut,1)
    name.splice(cut,1)
    price.splice(cut,1)
}
for (let i =0;i<cartItems.length+5;i++){
    let cut= cartItems.indexOf(null)
    if(cut==-1){
     
      cut = 10
      break;
     }

     name.splice(cut,1)
     cartItems.splice(cut,1)
     price.splice(cut,1)

     
 }
 
for(let i = 0;i<cartItems.length;i++){
  
        let tr = document.createElement('tr')
        tr.id = "row"+i
        table.appendChild(tr)
        
        let td= document.createElement('td')
        td.textContent =`remove `
        td.id ="delete"+i
        tr.appendChild(td)

          let td1= document.createElement('td')
          td1.innerText = cartItems[i]
          tr.appendChild(td1)

          let td2= document.createElement('td')
          td2.textContent = name[i]
          tr.appendChild(td2)

          let td3= document.createElement('td')
          td3.innerText = cartItems[i]*price[i]+'JD'
          tr.appendChild(td3)
         total += cartItems[i]*price[i]
}
let trf = document.createElement('tr') // footer table add total price
tfoot.appendChild(trf)
let tdf= document.createElement('td')
tdf.colSpan  = '4'
tdf.innerText = "total of price : " + total
trf.appendChild(tdf)

console.log (cartuser)

console.log(cartuser)
const ta = document.getElementById('cart');
ta.addEventListener('click', removeitem);
function removeitem(event){
  total = 0
    let target = event.target.innerText
if(target == 'remove'){
    let child = parseInt(event.target.parentElement.childNodes[1].innerText)
 event.target.parentElement.remove()
  let place =  cartItems.indexOf(child)
  let place2 = cartuser.indexOf(child)
    cartItems.splice(place,1,0)
    cartItems.splice(place,1,0)
    for( let i = 0;i<cartItems.length;i++){
      total += cartItems[i]*price[i]
    }
    tdf.innerText = "total of price : " + total
    cartuser.splice(place2,1,0)
    localStorage.cart = JSON.stringify(cartItems)
console.log(cartuser)
}
}
function myclear(){
     localStorage.removeItem('cart')
     

}
function checkout(){
  localStorage.cart3 = JSON.stringify(cartuser)
  localStorage.removeItem('cart')
}
