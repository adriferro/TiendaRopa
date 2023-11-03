import { insertProducts } from "./insertProducts.js"
import { listProducts } from "./listProducts.js"


document.addEventListener("DOMContentLoaded", listProducts)

document.addEventListener("DOMContentLoaded", () => {
    const btnForm = document.getElementById("inventory-form")

    btnForm.addEventListener("click", () => {
        insertProducts()
    })
})