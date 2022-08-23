

const cartArray = [];
function display(cartProduct) {
  console.log(cartProduct);
  const tablebody = document.getElementById('cart-product');
  tablebody.innerHTML = ``;
  for (let i = 0; i < cartProduct.length; i++){
    // console.log(cartArray[i].playerName);
    const name = cartArray[i].playerName;

    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${i+1}</th>
    <td>${name}</td>`
    tablebody.appendChild(tr)


  }
}





function addToCart(element) {
  const playerName = element.parentNode.children[0].innerText;
  
  const playerobj = {
    playerName: playerName
  }

  cartArray.push(playerobj);
  // console.log(cartArray);
  // console.log(cartArray.length);
  document.getElementById('total-added-player').innerText = cartArray.length;
  display(cartArray);
}


