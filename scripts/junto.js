document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-form")

    btnForm.addEventListener("click", () => {
        insertProducts()
    })
})



const inventory = [
    {id: 1, name: "Parte de arriba del chandal", amount: 20, price:50},
    {id: 2, name: "Parte de abajo del chandal", amount: 30, price:40},
    {id: 3, name: "Camiseta local", amount: 50, price:70},
    {id: 4, name: "Pantalón local", amount: 80, price:45},
    {id: 5, name: "Medias local", amount: 20, price:10},
    {id: 6, name: "Camiseta visitante", amount: 35, price:70},
    {id: 7, name: "Pantalón visitante", amount: 15, price:45},
    {id: 8, name: "Medias visitante", amount: 10, price:10},
    {id: 9, name: "Camiseta portero", amount: 55, price:70},
    {id: 10, name: "Pantalón portero", amount: 55, price:45},
    {id: 11, name: "Medias portero", amount: 100, price:10},
    {id: 12, name: "Bufanda", amount: 75, price:15},
];



const cleanTable = document.getElementById("inventory-content")

inventory.forEach(item => {
    const row = cleanTable.insertRow()

    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)

    cell1.innerText = item.name
    cell2.innerText = item.amount
    cell3.innerText = item.price

    const editButton = document.createElement("button")
    editButton.innerText = "Editar"
    editButton.classList.add("edit-button")
    editButton.addEventListener("click", () => {
        for (let producto of inventario) {
            if (producto.nombre === nombre) {
                producto.cantidad = nuevaCantidad;
                producto.precio = nuevoPrecio;
                return;
            }
        }
        console.log("Producto no encontrado.");
    })

    cell4.appendChild(editButton)

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Borrar"
    deleteButton.classList.add("delete-button")

    deleteButton.addEventListener("click", () => {
        //
    })

    cell4.appendChild(deleteButton)
})


const productForm = document.getElementById("inventory-form")
productForm.addEventListener("submit", (event) => {

    event.preventDefault()

    const productName = document.getElementById("product-name").value;
    const productQuantity = parseInt(document.getElementById("product-quantity").value);
    const productPrice = parseFloat(document.getElementById("product-price").value).toFixed(2);

    if (productName && !isNaN(productPrice) && !isNaN(productQuantity)) {
        const newProduct = {
            id: inventory.length + 1,
            name: productName,
            amount: productQuantity,
            price: productPrice
        };
        inventory.push(newProduct);
        cleanTable.innerHTML = "";
        listProducts();
        console.log("Producto agregado correctamente.");
    } else {
        console.log("Error: Asegúrate de ingresar valores válidos para el nombre, cantidad y precio del producto.");
    }
})