document.addEventListener("scroll", function (e) {
   // nav color change
   const partYellow = document.querySelector(".container");
   const header = document.querySelector("header");
   const heightYellow = partYellow.offsetHeight;

   if (window.scrollY >= heightYellow - header.offsetHeight) {
      header.classList.add("change-color");
   } else {
      header.classList.remove("change-color");
   }

   // aside make sticky
   const aside = document.querySelector(".container-right aside");
   const footer = document.querySelector("footer");

   const asideHeight = aside.offsetHeight;
   console.log("offset height: ", asideHeight);
   const containerTrending =
      document.getElementsByClassName("container-trending")[0];
   const containerTrendingButtom =
      containerTrending.getBoundingClientRect().bottom;
   const containerLower = document.getElementsByClassName("container-lower")[0];
   const containerLowerStyle =
      containerLower.currentStyle || window.getComputedStyle(containerLower);
   const heightTopAside =
      header.offsetHeight +
      parseInt(containerLowerStyle.marginTop.replace("px", ""));
   const footerStyle = footer.currentStyle || window.getComputedStyle(footer);
   const footerMarginTop = parseInt(footerStyle.marginTop.replace("px", ""));

   // add class sticky and calculated top value
   if (containerTrendingButtom <= header.offsetHeight) {
      aside.classList.add("sticky");
      aside.style.top = heightTopAside + "px";
      footer.classList.add("sticky");
      footer.style.top = heightTopAside + asideHeight + footerMarginTop + "px";
   } else {
      aside.classList.remove("sticky");
      footer.classList.remove("sticky");
   }
});

// letter animation fully generate by given string
// I wanted a light-weight file on load in this case. so I tried to implement it in this way
// available in "letter-animation.html"
const rawLetterRenderAnimation = function () {
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

   const renderDefault = function () {
      // iterate each column
      for (let i = 0; i < mainArr.length; i++) {
         const containerAnimation = document.getElementById(
            "container-animation"
         );
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

   const generateRandomNum = function (num) {
      return Math.floor(Math.random() * num + 1);
   };

   let rawLetters = document.getElementsByClassName("row-letter");
   rawLetters = Array.from(rawLetters);

   const loop = setInterval(function () {
      // iterate letter row
      // forward iteration
      for (let i = 0; i < rawLetters.length; i++) {
         const spanLength = rawLetters[i].childNodes.length;
         // iterate letter span
         // forward iteration
         for (let j = 0; j < spanLength; j++) {
            const span = rawLetters[i].childNodes[j];
            const randomVal = generateRandomNum(spanLength);
            for (let k = 0; j < randomVal; j++) {
               span.classList.toggle("letter-dynamics");
            }
         }
      }
      // backward iteration
      for (let i = rawLetters.length; i > 0; i--) {
         const spanLength = rawLetters[i].childNodes.length;
         // iterate letter span
         for (let j = spanLength; j > 0; j--) {
            const span = rawLetters[i].childNodes[j];
            const randomVal = generateRandomNum(spanLength);
            for (let k = randomVal; k > 0; k--) {
               span.classList.toggle("letter-dynamics");
            }
         }
      }
   }, 650);
};

rawLetterRenderAnimation();

// Clear the interval after some time
// setTimeout(function () {
//    clearInterval(loop);
// }, 2000);
