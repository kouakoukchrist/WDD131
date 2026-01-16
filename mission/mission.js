// Get the dropdown element

const logo = document.querySelector("#logo");
const modeSelect = document.querySelector("#mode");

// Listen for a change
modeSelect.addEventListener("change", changeMode);

function changeMode() {
    if (modeSelect.value === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");

        logo.src="byui-logo-white.png"
    } 
    else if (modeSelect.value === "light") {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        logo.src="byui-logo-blue.webp"
    }
}
