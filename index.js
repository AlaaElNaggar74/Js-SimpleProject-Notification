console.log("dsddddddddddddd");

let allPop = document.querySelectorAll(".popup");

let allShowPop = document.querySelectorAll(".showPopup");

let parar = document.querySelectorAll(".paragr");
let leftSide = document.querySelectorAll(".leftSide");

let paragBoolean = true;
let count = 0;

allShowPop.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let x = ele.id;

    if (
      document.querySelector(`[data-name=${x}]`).classList.contains("active")
    ) {
      document.querySelector(`[data-name=${x}]`).classList.remove("active");
    } else {
      allPop.forEach((ele) => {
        ele.classList.remove("active");
      });
      document.querySelector(`[data-name=${x}]`).classList.add("active");
    }
  });
});

let len = "";
let content = "";
let sliced = "";
let arr = [];

function removeWords() {
  parar.forEach((ele) => {
    content = `${ele.innerText}`;

    sliced = `${ele.innerText.slice(0, 25)}...`;
    ele.innerText = `${sliced}...`;
  });
}

removeWords();

function reset() {
  parar.forEach((ele) => {
    ele.innerText = `${sliced}...`;
  });
}

leftSide.forEach((element) => {
  element.addEventListener("click", () => {
    let post = element.dataset.post;
    let paraEle = element.dataset.para;
    let eleX = document.querySelector(`#${paraEle}`);
    document.querySelector(`#${post}`).classList.remove("active");


    if (paragBoolean) {
      if (eleX.innerText.length === 31) {
        reset();
        eleX.innerText = `${content}`;
        len = eleX.innerText.length;
        paragBoolean = false;
      } else {
        reset();
        eleX.innerText = `${sliced}...`;

        len = eleX.innerText.length;
        paragBoolean = true;
      }
    } else {
      console.log(eleX.innerText.length);
      if (eleX.innerText.length === 31) {
        reset();
        eleX.innerText = `${content}`;
        len = eleX.innerText.length;
        paragBoolean = true;
      } else {
        reset();
        eleX.innerText = `${sliced}...`;

        len = eleX.innerText.length;
        paragBoolean = true;
      }
    }
  });
});
