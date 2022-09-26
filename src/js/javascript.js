// js code for substracting value
function counterMinus() {
  // get value from input box
  let counterdigit = document.getElementById("counterValue").value;
  // convert to integer
  let convertValue = parseInt(counterdigit);
  // substract input value from 1 on each click
  let subValue = convertValue - 1;
  // display substracted value in textbox
  document.getElementById("counterValue").value = subValue;
  // check if value becomes less than 0 dsable the minus button
  if (subValue <= 0) {
    document.getElementById("minusButton").disabled = true;
  } else {
    document.getElementById("minusButton").disabled = false;
  }
}
// js code for adding value
function counterPlus() {
  // get value from input box
  let counterdigit = document.getElementById("counterValue").value;
  // convert to integer
  let convertValue = parseInt(counterdigit);
  // add 1 to input value on each click
  let subValue = convertValue + 1;
  // display substracted value in textbox
  document.getElementById("counterValue").value = subValue;
  //   enable the button after the value is greater than 0
  if (subValue > 0) {
    document.getElementById("minusButton").disabled = false;
  }
}
