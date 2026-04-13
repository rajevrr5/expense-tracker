let total = 0;

function addExpense() {
    let desc = document.getElementById("desc").value;
    let amount = parseInt(document.getElementById("amount").value);

    if(desc === "" || isNaN(amount)) {
        alert("Enter valid data");
        return;
    }

    let li = document.createElement("li");
    li.textContent = desc + " - ₹" + amount;

    document.getElementById("list").appendChild(li);

    total += amount;
    document.getElementById("total").textContent = total;

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}
