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

const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", () => {
    const searchText = document.getElementById("searchProduct").value.trim().toLowerCase();

    const filteredProducts = inventory.filter((product) => product.name.toLowerCase().includes(searchText));

    const cleanTable = document.getElementById("cleanTable");
    cleanTable.innerHTML = "";

    if (filteredProducts.length === 0) {
        alert("No se encontraron productos que coincidan con la búsqueda.");
        cleanTable.innerHTML = "No hay productos."
        return;
    }
        listProducts(filteredProducts);
});