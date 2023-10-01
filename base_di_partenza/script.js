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

// const renderDefault = function () {
//    for (let i = 0; i < mainArr.length; i++) {
//       const containerText = document.querySelector(".text-container");
//       const row = document.createElement("div");
//       const span = document.createElement("span");
//       span.classList.add("letter-original");
//       row.classList.add("text-row");
//       row.style.top = `${i}em`;
//       const rowOriginal = document.createElement("p");
//       const rowRandom = document.createElement("p");
//       rowOriginal.classList.add("text-block");
//       rowRandom.classList.add("text-block");
//       rowOriginal.innerText = mainArr[i].join(",").replace(/\,/g, "");
//       rowRandom.innerText = mainArr[i].join(",").replace(/\,/g, "");
//       row.appendChild(rowOriginal);
//       row.appendChild(rowRandom);
//       containerText.appendChild(row);
//    }
// };
const renderDefault = function () {
   // iterate each column
   for (let i = 0; i < mainArr.length; i++) {
      // const containerText = document.querySelector(".text-container");
      const containerAnimation = document.getElementById("container-animation");
      const rowLetters = document.createElement("p");
      rowLetters.classList.add("row-letter");

      // iterate row
      for (let j = 0; j < mainArr[i].length; j++) {
         rowLetters.innerHTML += `<span class="letter-original">${mainArr[i][j]}</span>`;
      }
      containerAnimation.appendChild(rowLetters);
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

let rawLetters = document.getElementsByClassName("row-letter");
rawLetters = Array.from(rawLetters);

const loop = setInterval(function () {
   let temArray = [];

   // column
   for (let i = 0; i < mainArr.length; i++) {
      temArray = mainArr[i];
      const mainArrRowLength = mainArr[i].length;

      // adding span to the rest of the letters
      for (let k = 0; k < temArray.length; k++) {
         if (temArray[k] === "M") {
            temArray[k] = `<span class="letter-original">M</span>`;
         } else if (temArray[k] === " ") {
            temArray[k] = `<span class="letter-original"> </span>`;
         }
      }

      // generating random animation/patter of row of letters
      const random = generateRandomNum(mainArrRowLength);
      for (let j = 0; j < random; j++) {
         const randomSecondNum = generateRandomNum(mainArrRowLength);

         if (RandomOneOrZero()) {
            temArray[
               randomSecondNum
            ] = `<span class="letter-original letter-dynamics"> </span>`;
         } else {
            temArray[
               randomSecondNum
            ] = `<span class="letter-original letter-dynamics">M</span>`;
         }
      }
      rawLetters[i].innerHTML = temArray.join(",").replace(/\,/g, "");
   }
}, 1000);
// const loop = setInterval(function () {
//    let temArray = [];
//    // const words = document.querySelector(".word-text");
//    // const word = words.querySelectorAll("span");
//    // word.forEach((element) => {
//    //    if (element.classList.contains("word")) {
//    //       element.classList.remove("word");
//    //    } else {
//    //       element.classList.add("word");
//    //    }
//    // });

//    for (let i = 0; i < textBlocks.length; i++) {
//       // itterating 2d array
//       if ((i % 2 === 0 && len > i / 2) || i === mainArr.length - 1) {
//          // make a condition that randomply place between tem array or original
//          // randomply remove characters

//          temArray = mainArr[i / 2];
//          const random = generateRandomNum(len);
//          for (let j = 0; j < random; j++) {
//             const randomSecondNum = generateRandomNum(len);

//             if (RandomOneOrZero()) {
//                temArray[randomSecondNum] = "  ";
//             } else {
//                temArray[randomSecondNum] = " M ";
//             }
//          }
//       }

//       if (i % 2 !== 0) {
//          textBlocks[i].innerText = temArray.join(",").replace(/\,/g, "");
//       }
//       // textBlocks[i].classList.toggle("text-red");
//       textBlocks[i].classList.add("text-red");
//    }
// }, 2000);

// Clear the interval after some time
setTimeout(function () {
   clearInterval(loop);
}, 2000);

// if (RandomOneOrZero()) {
//    // temArray[randomSecondNum].includes("letter-dynamics"
//    if (
//       temArray[randomSecondNum] ===
//       `<span class="letter-original letter-dynamics"> </span>`
//    ) {
//       temArray[randomSecondNum] ===
//          `<span class="letter-original"> </span>`;
//    } else if (
//       temArray[randomSecondNum] ===
//       `<span class="letter-original"> </span>`
//    ) {
//       temArray[randomSecondNum] ===
//          `<span class="letter-original letter-dynamics"> </span>`;
//    }
// } else {
//    if (
//       temArray[randomSecondNum] ===
//       `<span class="letter-original letter-dynamics">M</span>`
//    ) {
//       temArray[randomSecondNum] ===
//          `<span class="letter-original">M</span>`;
//    } else if (
//       temArray[randomSecondNum] ===
//       `<span class="letter-original">M</span>`
//    ) {
//       temArray[randomSecondNum] ===
//          `<span class="letter-original letter-dynamics">M</span>`;
//    }
// }
