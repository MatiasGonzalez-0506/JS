let inputs=document.querySelector("form");
inputs.addEventListener("submit", (e) => {e.preventDefault();
let price=document.getElementById("price").value;
let units=document.getElementById("units").value;
let color=document.getElementById("color").value;
document.getElementById("list").innerHTML += `<li>Total de Venta $: ${price*units}</li><li>cantidad: ${units}</li><li>Color: ${color}</li>`
document.getElementById("circle").style.backgroundColor=color;
inputs.reset();});