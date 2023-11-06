import { listProducts } from "./listProducts.js";
import { insertProducts } from "./insertProducts.js";
import { inventory } from "./products.js";


listProducts()

document.addEventListener("click", () => {
    const btnForm = document.getElementById("productForm");

    btnForm.addEventListener("click", () => {
        insertProducts();
    });
});

// Handle the search button click
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", () => {
    const searchText = document.getElementById("searchProduct").value.trim().toLowerCase();

    // Filter products based on the search text
    const filteredProducts = inventory.filter((product) => product.name.toLowerCase().includes(searchText));

    // Clear the table
    const cleanTable = document.getElementById("cleanTable");
    cleanTable.innerHTML = "";

    // List the filtered products
    listProducts(filteredProducts);
});