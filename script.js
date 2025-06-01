const btn = document.querySelectorAll("button");
const inputField = document.querySelector("input");

let num = "";

btn.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "=") {
            try {
                num = eval(num); // Evaluate the expression
                inputField.value = num;
            } catch {
                inputField.value = "Error";
            }
        } else if (value === "C") {
            num = ""; // Clear input completely
            inputField.value = num;
        } else if (value === "CE") {
            num = ""; // Clear current entry (same as "C" for now)
            inputField.value = num;
        } else if (value === "DEL") {
            num = num.slice(0, -1); // Remove last character
            inputField.value = num;
        } else {
            num += value; // Append numbers and operators
            inputField.value = num;
        }
    });
});

