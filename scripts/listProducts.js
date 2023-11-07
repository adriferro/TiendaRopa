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


        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "BORRAR";

        deleteBtn.addEventListener("click", () => {
            const confirmed = window.confirm("¿Desea borrar este producto?");
            if (confirmed) {

                const index = productsToDisplay.indexOf(item);
                if (index !== -1) {
                    productsToDisplay.splice(index, 1);
                }
                row.remove();
            }
        });

        cell4.appendChild(deleteBtn);


        const editBtn = document.createElement("button"); 
        editBtn.innerText = "EDITAR";
        editBtn.id = "editButton";


        editBtn.addEventListener("click", () => {
            editBtn.style.display = "none"

            const quantityInput = document.createElement("input");
            quantityInput.type = "number"; 
            quantityInput.value = item.quantity;

            const priceInput = document.createElement("input");
            priceInput.type = "text"; 
            priceInput.value = item.price;

            cell2.innerHTML = "";
            cell2.appendChild(quantityInput);
            cell3.innerHTML = "";
            cell3.appendChild(priceInput);

            const confirmBtn = document.createElement("button");
            confirmBtn.innerText = "CONFIRMAR";
            cell4.appendChild(confirmBtn)

            confirmBtn.addEventListener("click", () => {
                item.quantity = quantityInput.value;
                item.price = priceInput.value;

                cell2.innerHTML = item.quantity;
                cell3.innerHTML = item.price;

                cell4.removeChild(confirmBtn);

                editBtn.style.display = "inline"
            });
        });
        cell4.appendChild(editBtn);
    });
};