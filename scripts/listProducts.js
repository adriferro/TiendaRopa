import { inventory } from "./products.js";

export const listProducts = () => {
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
}