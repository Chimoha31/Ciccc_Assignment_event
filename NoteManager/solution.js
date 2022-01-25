const form = document.querySelector("#add");
const input = document.querySelector("#add-input");
const addButton = document.querySelector("#add-btn");
const ul = document.querySelector('#list');

const li = document.createElement('li');



addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const inputText = input.value;
  console.log(inputText);
  
  if(!input.value) {
    return;
  } else {
    li.innerText = inputText;
    console.log(li);
    ul.appendChild(li);
  }
});
