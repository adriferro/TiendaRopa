import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const insertProducts = () => {
    const productForm = document.getElementById("productForm")
    productForm.addEventListener("submit", (event) => {

        event.preventDefault()

        const productName = document.getElementById("productName").value
        const productQuantity = parseInt(document.getElementById("productQuantity").value)
        const productPrice = parseFloat(document.getElementById("productPrice").value).toFixed(2)

        if(productName && !isNaN(productPrice) && !isNaN(productQuantity)){
            const newProduct = {
                id: inventory.length + 1,
                name: productName,
                quantity: productQuantity,
                price: productPrice
            }
            inventory.push(newProduct)
            const cleanTable = document.getElementById("cleanTable")
            cleanTable.innerHTML = ""
            productForm.reset()
            listProducts()
        }
    })
}
