const cardNumberInput = document.getElementById("cardNumber");
const expiryInput = document.getElementById("expiry");
const cvvInput = document.getElementById("cvv");
const nameInput = document.getElementById("name");
const form = document.getElementById("paymentForm");
const modal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModal");

cardNumberInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 16);

    //add space after every 4 digits
    let formatted = "";
    for (let i = 0; i < value.length; i++) {
        if (i % 4 === 0 && i > 0) {
            formatted += " ";
        }
        formatted += value[i];
    }
    e.target.value = formatted;
});
