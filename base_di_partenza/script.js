// document.addEventListener("scroll", function (e) {
//    const partYellow = document.querySelector(".container");
//    const header = document.querySelector("header");
//    const heightYellow = partYellow.offsetHeight;

//    if (window.scrollY >= heightYellow - header.offsetHeight) {
//       header.classList.add("change-color");
//    } else {
//       header.classList.remove("change-color");
//    }
// });

const letters = `M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M
M M M M M M M M M M M M
M M M M M M M M M M M M M M M M M M M M M
M M M M M M M M M M M
M M M M M M M M M M M M M M M M M
M M M M M M M M M M M M M M M M`;

let arr = [];
const mainArr = [];

// creating a 2d array
for (let i = 0; i < letters.length; i++) {
   if (letters.charAt(i) !== "\n") {
      arr.push(letters.charAt(i));
   } else {
      mainArr.push(arr);
      arr = [];
   }
}

let textBolcks = document.getElementsByClassName("text-block");
textBolcks = Array.from(textBolcks);

const renderDefault = function () {
   for (let i = 0; i < mainArr.length; i++) {
      const containerText = document.querySelector(".text-container");
      const row = document.createElement("div");
      row.classList.add("text-row");
      row.style.top = `${i}em`;
      const rowOriginal = document.createElement("p");
      const rowRandom = document.createElement("p");
      rowOriginal.classList.add("text-block");
      rowRandom.classList.add("text-block");
      rowOriginal.innerText = mainArr[i].join(",").replace(/\,/g, "");
      rowRandom.innerText = mainArr[i].join(",").replace(/\,/g, "");
      row.appendChild(rowOriginal);
      row.appendChild(rowRandom);
      containerText.appendChild(row);
   }
};
renderDefault();

// const some = ["2", "$", "hello"].join(",").replace(/\,/g, "");
// console.log(some);

const generateRandomNum = function (num) {
   return Math.floor(Math.random() * num + 1);
};

const RandomOneOrZero = function () {
   return Math.round(Math.random());
};

const len = mainArr.length;
const textBlocks = document.querySelectorAll(".text-block");

const loop = setInterval(function () {
   let temArray = [];
   let temArray1 = [];
   for (let i = 0; i < textBlocks.length; i++) {
      // itterating 2d array
      if ((i % 2 === 0 && len > i / 2) || i === mainArr.length - 1) {
         temArray1 = mainArr[i / 2];
         // make a condition that randomply place between tem array or original
         // randomply remove characters

         temArray = mainArr[i / 2];
         const random = generateRandomNum(len / 2);
         for (let j = 0; j < random; j++) {
            const randomSecondNum = generateRandomNum(len);

            if (RandomOneOrZero()) {
               temArray[randomSecondNum] = "  ";
            } else {
               temArray[randomSecondNum] = " M ";
            }
         }
      }

      if (i % 2 !== 0) {
         textBlocks[i].innerText = temArray.join(",").replace(/\,/g, "");
      }

      // textBlocks[i].classList.toggle("text-red");
      textBlocks[i].classList.add("text-red");
   }
}, 1000);

// Clear the interval after some time
// setTimeout(function () {
//    clearInterval(loop);
// }, 1000);
