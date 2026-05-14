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

    if (value.length === 16) {
        expiryInput.focus();
    }
});

expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length >= 2) {
        let month = parseInt(value.substring(0, 2));

        if (month > 12) {
            month = 12;
        }

        if (month < 1) {
            month = 1;
        }

        value = month.toString().padStart(2, "0") + value.substring(2);
    }

    if (value.length > 2) {
        value = value.substring(0, 2) + " / " + value.substring(2);
    }

    e.target.value = value;

    if (value.replace(/\D/g, "").length === 4) {
        cvvInput.focus();
    }
});

cvvInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 3);

    e.target.value = value;

    if (value.length === 3) {
        nameInput.focus();
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    form.reset();
});
