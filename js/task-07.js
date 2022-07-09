const input = document.querySelector("#font-size-control")
const span = document.querySelector("#text")

input.addEventListener("input", handleEvent);

function handleEvent() {
    const fontSize = input.value
    span.style.fontSize = `${fontSize}px`
}