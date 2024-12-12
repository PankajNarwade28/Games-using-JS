let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = " ";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    let txt = e.target.innerHTML;
    if (txt == "=") {
      string = eval(string);
      inputBox.value = string;
      string = inputBox.value;
    } else if (txt == "AC") {
      string = "";
      inputBox.value = string;
    } else if (txt == "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else if (
      txt == "%" ||
      txt == "/" ||
      txt == "+" ||
      txt == "-" ||
      txt == "*"
    ) {
      let ch = string.substring(string.length - 1, string.length);
      console.log(ch);
      if (ch == "%" || ch == "/" || ch == "+" || ch == "-" || ch == "*") {
        string = string.substring(0, string.length - 1);
        string += txt;
        inputBox.value = string;
      } else {
        string += txt;
        inputBox.value = string;
      }
    } else {
      //   console.log(txt);
      string += txt;
      inputBox.value = string;
    }
  });
});
