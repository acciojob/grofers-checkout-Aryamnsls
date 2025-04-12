const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let sum = 0;

  prices.forEach(priceEl => {
    const value = parseInt(priceEl.innerText) || 0;
    sum += value;
  });

  const table = document.querySelector("table");

  // Remove previous total row if already added
  const existingTotalRow = document.getElementById("ans-row");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Create a new row and cell
  const totalRow = document.createElement("tr");
  totalRow.setAttribute("id", "ans-row");

  const totalCell = document.createElement("td");
  totalCell.setAttribute("id", "ans"); // required for Cypress test to detect it
  totalCell.setAttribute("colspan", "2");
  totalCell.innerText = sum;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
