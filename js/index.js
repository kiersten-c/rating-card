const submitButton = document.getElementById("submit-button");
const ratingSection = document.getElementById("rating");
const thanksSection = document.getElementById("thankyou");
const rating = document.getElementById("rated");
const toolbar = document.getElementById("toolbar input");

submitButton.addEventListener("click", function () {
  const rate = toolbar.value;
  console.log(rate);
});
