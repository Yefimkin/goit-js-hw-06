const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlurEvent);

function onBlurEvent() {
  Number(input.dataset.length) === input.value.trim().length
    ? input.setAttribute("class", "valid")
    : input.setAttribute("class", "invalid");
}
