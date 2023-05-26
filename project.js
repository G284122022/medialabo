let submit = document.querySelector("button#submit");
submit.addEventListener("click", getData);

function getData() {
    let input = document.querySelector("select#country");
    console.log(input.value);
    // let display = document.querySelector("div#display");
    // display.textContent = input.value;
}