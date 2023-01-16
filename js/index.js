const ratings = document.querySelectorAll('input[name="val"]');
const submitBtn = document.getElementById("submit-button")
const rateState = document.getElementById("rating")
const thankState = document.getElementById("thankyou")
const userRating = document.getElementById("rated")

submitBtn.addEventListener("click", () => {
  let selectedRate;
  for (const rating of ratings) {
    if (rating.checked) {
      selectedRate = rating.value;
      break;
    }
  }
  rateState.classList.add("hide")
  thankState.classList.remove("hide")
  userRating.innerText = `${selectedRate}`
})