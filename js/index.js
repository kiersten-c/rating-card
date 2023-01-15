const ratings = document.querySelectorAll('input[name="val"]');
const submitBtn = document.getElementById("submit-button")

submitBtn.addEventListener("click", () => {
  let selectedRate;
  for (const rating of ratings) {
    if (rating.checked) {
      selectedRate = rating.value;
      break;
    }
  }
})