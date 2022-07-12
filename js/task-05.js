const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", nameLabel);

function nameLabel() {
  nameOutput.textContent = nameInput.value;
  if (nameInput.value.trim() === "") {
    nameOutput.value = "Anonymous";
  }
}
