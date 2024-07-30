const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "del") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (item.id == "equals") {
            if (display.innerText != "") {
                display.innerText = eval(display.innerText);
            } else {
                display.innerText = "Empty!";
                setTimeout(() => (display.innerText = ""), 2000);
            }
        } else if (item.id == "ac") {
            display.innerText = ""; // Clear the display
        } else {
            display.innerText += item.id;
        }
    };
});