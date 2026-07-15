function donate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let amount = document.getElementById("amount").value;

    if (amount <= 0) {
        alert("Please enter a valid donation amount");
        return false;
    }

    // Store details temporarily
    localStorage.setItem("donorName", name);
    localStorage.setItem("donorEmail", email);
    localStorage.setItem("donationAmount", amount);

    // Redirect to confirmation page
    window.location.href = "confirm.html";
    return false;
}
