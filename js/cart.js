const cartItems = JSON.parse(localStorage.getItem('cart')) || []
console.log(cartItems)
ul = document.getElementById('listcart')
for(let i = 0;i<cartItems.length;i++){
    console.log(cartItems[i])
    li = document.createElement('li')
    li.textContent = cartItems[i]
    ul.appendChild(li)
}
