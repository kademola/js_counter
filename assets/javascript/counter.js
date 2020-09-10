let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

incrementButton.addEventListener("click", function () {
  console.log("Button Clicked");

  // Calculate the new value for counter
  let newCounterValue = Number(counter.innerHTML) + 1;

  // If the counter is >=10 then change the text color to red
  if (newCounterValue >= 10) {
    counter.style.color = "red";
  }

  //Calculate the new value for our counter
  counter.innerHTML = newCounterValue;
});

decrementButton.addEventListener("click", function () {
  console.log("Button clicked");

  // Calculate the new value of counter
  let newCounterValue = Number(counter.innerHTML) - 1;

  // If counter drops below 10, change the text color to black
  if (newCounterValue < 10) {
    counter.style.color = "black";
  }

  // Update the counter value if counter is > 0
  if (counter.innerHTML > 0) {
    counter.innerHTML = newCounterValue;
  }
});
