const cartItems = JSON.parse(localStorage.getItem('cart')) || []
table = document.querySelector('tbody')
let name = ['name1', 'name2', 'name3', 'name4']
let cartuser = []
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
    cartuser.push(cartItems[i], name[i])
    localStorage.cart2 = JSON.stringify(cartuser)


}
cartuser.push(localStorage.getItem('userOfThisSite'));
localStorage.cart2 = JSON.stringify(cartuser)
const ta = document.getElementById('cart');
ta.addEventListener('click', removeitem);

function removeitem(event) {
    let target = event.target.innerText
    if (target == 'remove') {
        let child = parseInt(event.target.parentElement.childNodes[1].innerText)
        event.target.parentElement.remove()
        let place = cartItems.indexOf(child)
        cartItems.splice(place, 1)
        cartuser.splice(place, 2)

        localStorage.cart = JSON.stringify(cartItems)
        localStorage.cart2 = JSON.stringify(cartuser)

    }
}
if (cartuser.length == 1) {
    cartuser.splice(0, 1);
    localStorage.cart2 = JSON.stringify(cartuser)
}

function myclear() {
    location.reload()
    localStorage.removeItem('cart')
    localStorage.removeItem('cart2')

}