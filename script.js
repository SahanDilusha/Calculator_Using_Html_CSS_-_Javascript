const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {

        if (item.id === "clear") {
            display.innerHTML = "";
        } else if (item.id == "backspase") {
            let text = display.innerHTML.toString();
            display.innerHTML = text.substring(0, text.length - 1);
        } else if (display.innerHTML != '' && item.id == 'equal') {

        }


    }
})