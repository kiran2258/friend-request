function CheckPalindrome() {
  const input = document.getElementById("inputText").value.toLowerCase();
  const reversedText = input.split("").reverse("").join("");
  if (input === reversedText) {
    document.getElementById(
      "Result"
    ).innerText = `"${input}" is a palindrome`;
  } else {
    document.getElementById(
      "Result"
    ).innerText = `"${input}" is not a palindrome`;
  }
}

// function CheckPalindrome() {
//   const inputText = document
//     .getElementById("inputText")
//     .value.toLowerCase();

//   const reversedText = inputText.split("").reverse().join("");

//   if (inputText === reversedText) {
//     document.getElementById(
//       "result"
//     ).innerText = `"${inputText}" is a palindrome.`;
//   } else {
//     document.getElementById(
//       "result"
//     ).innerText = `"${inputText}" is not a palindrome.`;
//   }
// }

// f
//   // Get the input text and convert to lowercase
//   const inputText = document
//     .getElementById("inputText")
//     .value.toLowerCase()
//     .trim();

//   // Check if the input is empty
//   if (!inputText) {
//     document.getElementById("result").innerText = "Please enter some text.";
//     return;
//   }

//   // Reverse the input text
//   const reversedText = inputText.split("").reverse().join("");

//   // Check if the input text is the same as the reversed text
//   if (inputText === reversedText) {
//     document.getElementById(
//       "result"
//     ).innerText = `${inputText} is a palindrome.`;
//   } else {
//     document.getElementById(
//       "result"
//     ).innerText = `${inputText} is not a palindrome.`;
//   }
// }
// unction CheckPalindrome() {