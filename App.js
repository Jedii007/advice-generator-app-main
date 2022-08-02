const get_Advice = document.getElementById("dice");
const Advice_container = document.getElementById("Advice");
var adviceId = document.getElementById("advice_id")

dice.addEventListener("click", function () {
  getAdvice();
});

function getAdvice() {
    fetch("https://api.adviceslip.com/advice") //api for the get request
        .then((response) => response.json())
        .then((data) => {
            adviceId.innerHTML = data.slip.id
            Advice_container.innerHTML = data.slip.advice
            
        }).catch((error) => {
            console.log(error)
        })
}
