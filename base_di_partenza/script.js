document.addEventListener("scroll", function (e) {
   const partYellow = document.querySelector(".container");
   const header = document.querySelector("header");
   const heightYellow = partYellow.offsetHeight;

   if (window.scrollY >= heightYellow - header.offsetHeight) {
      console.log("change color");
      header.classList.add("change-color");
   } else {
      header.classList.remove("change-color");
   }
});
