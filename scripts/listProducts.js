import { inventory } from "./products.js";

export const listProducts = (products) => {
    const cleanTable = document.getElementById("cleanTable");
    cleanTable.innerHTML = "";

    const productsToDisplay = products || inventory;

    productsToDisplay.forEach((item) => {
        const row = cleanTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = item.name;
        cell2.innerHTML = item.quantity;
        cell3.innerHTML = item.price;

        const deleteBtn = document.createElement("deleteButton");
        deleteBtn.innerText = "BORRAR";
        deleteBtn.addEventListener("click", () => {
            const confirmed = window.confirm("¿Desea borrar este producto?");
            if (confirmed) {
                row.remove();
            }
        });
        cell4.appendChild(deleteBtn);

        const editBtn = document.createElement("editButton");
        editBtn.innerText = "EDITAR";
        editBtn.addEventListener("click", () => {
            const quantityInput = document.createElement("inputQuantity");
            quantityInput.value = item.quantity;

            const priceInput = document.createElement("inputPrice");
            priceInput.value = item.price;

            // Replace the cell content with input fields
            cell2.innerHTML = "";
            cell2.appendChild(quantityInput);

            cell3.innerHTML = "";
            cell3.appendChild(priceInput);

            // Add a confirm button
            const confirmBtn = document.createElement("confirmButton");
            confirmBtn.innerText = "CONFIRMAR";
            cell4.appendChild(confirmBtn);

            confirmBtn.addEventListener("click", () => {
                // Update the quantity and price values with the new values from the input fields
                item.quantity = quantityInput.value;
                item.price = priceInput.value;

                // Update the cell content
                cell2.innerHTML = item.quantity;
                cell3.innerHTML = item.price;

                // Remove the confirm button
                cell4.removeChild(confirmBtn);
            });
        });

        cell4.appendChild(editBtn);
    });
};
