const passwordInput = document.getElementById("password")
const strengthDisplay = document.getElementById("strength")
const suggestionsDisplay = document.getElementById("suggestions")

passwordInput.addEventListener ("input",checkPasswordStrength)

const password = passwordInput.ariaValueMax

let strength =0;
let suggestions = []

