let h1 =document.querySelector("h1");
h1.addEventListener('click', (event) => {
  event.preventDefault();
  // Do other things
  h1.style.color="red";

});
