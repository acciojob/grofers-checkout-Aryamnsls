const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    const priceElements = document.querySelectorAll(".price");
    
    let total = 0;
    priceElements.forEach((priceCell) => {
        total += parseFloat(priceCell.textContent); // Convert text to number and add
    });

    // Create new row
    const table = document.querySelector("table");
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    // Set colspan to span both columns and display total
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalCell.style.fontWeight = "bold";

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow); // Append the new row to the table
};

getSumBtn.addEventListener("click", getSum);
