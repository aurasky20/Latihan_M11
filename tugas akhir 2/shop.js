document.querySelector("#search-button").addEventListener("click", () => {
  const searchForm = document.querySelector(".search-form");
  searchForm.classList.toggle("active");
  const searchBox = document.querySelector("#search-box");
  searchBox.focus();
});

// const slides = document.querySelectorAll(".slide-button");
// let i = 0;

// function intervalEvent() {
//   slides[i].click();
//   i++;

//   if (i >= slides.length) i = 0;
// }

// window.addEventListener("scroll", () => {
//   const { scrollY } = window;
//   let interval;

//   if (scrollY > 200) {
//     console.log('stopped slide');
//     clearInterval(interval);
//   } else if (scrollY <= 200) {
//     console.log('started slide');
//     interval = setInterval(intervalEvent, 3000);
//   }
// });
