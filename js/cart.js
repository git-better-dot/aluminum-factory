const cartItems = JSON.parse(localStorage.getItem('cart')) || []
table = document.querySelector('tbody')
let cartName = [];
let name = ['name1', 'name2', 'name3', 'name4']
console.log(cartItems)
for (let i = 0; i < cartItems.length + 1; i++) {
    let cut = cartItems.indexOf(0)
    if (cut == -1) { break }
    cartItems.splice(cut, 1)
    name.splice(cut, 1)
}
for (let i = 0; i < cartItems.length + 1; i++) {

    let cut = cartItems.indexOf(null)
    if (cut == -1) { break }
    cartItems.splice(cut, 1)
    name.splice(cut, 1)
    console.log(cartItems)

}


for (let i = 0; i < cartItems.length; i++) {

    let tr = document.createElement('tr')
    tr.id = "row" + i
    table.appendChild(tr)

    let td = document.createElement('td')
    td.textContent = `remove `
    td.id = "delete" + i
    tr.appendChild(td)

    let td1 = document.createElement('td')
    td1.innerText = cartItems[i]
    tr.appendChild(td1)

    let td2 = document.createElement('td')
    td2.textContent = name[i]
    tr.appendChild(td2)
    cartName.push(cartItems[i], name[i]);
    localStorage.cartName = JSON.stringify(cartName);
}
const ta = document.getElementById('cart');
ta.addEventListener('click', removeitem);

function removeitem(event) {
    let target = event.target.innerText
    if (target == 'remove') {
        let child = parseInt(event.target.parentElement.childNodes[1].innerText)
        event.target.parentElement.remove()
        let place = cartItems.indexOf(child)
        cartItems.splice(place, 1, 0)
        cartuser.splice(place, 2)
        if (cartuser.length == 1) { cartuser.splice(0) }
        localStorage.cart = JSON.stringify(cartItems)
        localStorage.cartName = JSON.stringify(cartName)
    }
}

function myclear() {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartName");
    location.reload()
}