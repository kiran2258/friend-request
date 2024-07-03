const inputfield = document.querySelector("#password");
const outputfield = document.querySelector("#output");

inputfield.addEventListener("input", function () {
  // console.log(inputbox.value)
  let password = inputfield.value;
  if (password.length < 6) {
    outputfield.innerText = "Password must be at least 6 characters long.";
    outputfield.style.color = "red";
  } else {
    outputfield.innerText = "password is long enough to";
    outputfield.style.color = "green";

    if (password.search(/[a-z]/) == -1) {
      outputfield.innerText = "Password is missing lowercase letter";
      outputfield.style.color = "red";
    } else if (password.search(/[0-9]/) == -1) {
      outputfield.innerText = "Password is missing a numeric letter";
      outputfield.style.color = "red";
    } else if (
      password.search(
        /[!\@\#\$\%\^\&\*\(\)\-\{\}\:\"\<\>\?\|\[\]\\\;\'\.\,]/
      ) == -1
    ) {
      outputfield.innerText = "Password is missing a Specaol Character";
      outputfield.style.color = "red";
    } else {
      outputfield.innerText = "Password is strong enough";
      outputfield.style.color = "green";
    }
  }
});
