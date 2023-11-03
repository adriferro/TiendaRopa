import { inventory } from "./products.js";
import { listProducts } from "./listProducts.js";

export const insertProducts = () => {
    const productForm = document.getElementById("inventory-form")
    productForm.addEventListener("submit", (event) => {

        event.preventDefault()

        const productName = document.getElementById("product-name").value
        const productQuantity = parseInt(document.getElementById("product-quantity").value)
        const productPrice = parseFloat(document.getElementById("product-price").value).toFixed(2)

        if(productName && !isNaN(productPrice) && !isNaN(productQuantity)){
            const newProduct = {
                id: inventory.length + 1,
                name: productName,
                amount: productQuantity,
                price: productPrice
            }
            inventory.push(newProduct)
            const cleanTable = document.getElementById("inventory-content")
            cleanTable.innerHTML = ""
            productForm.reset()
            listProducts()
        }
    })
}