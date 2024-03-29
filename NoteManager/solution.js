const input = document.querySelector("#add-input");
const addButton = document.querySelector("#add-btn");
const ul = document.querySelector("#list");
const li = document.createElement("li");

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  const inputText = input.value;

// Solution2 (複数生成あり)
 const copy = ul.firstElementChild.cloneNode(true);
 copy.firstElementChild.innerText = inputText;
 ul.appendChild(copy);
 console.log(copy);
 


// Solution1 (複数生成なし)
  // if (!input.value) {
  //   return;
  // } else {
  //   li.innerHTML = `<p>${inputText}</p>
  //       <p>
  //       <i class="fa fa-pencil"></i>
  //       <i class="fa fa-times"></i>
  //     </p>`;
  //   // console.log(li);
  //   ul.appendChild(li);
  // }
});

// Addボタンを押したら内容をクリアにする
addButton.addEventListener("click", function () {
  input.value = "";
});
