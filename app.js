
function palindrome(forwards) {
  //perform an operation on a string that removers unwanted characters and makes input lowercase
   var lower = forwards.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // write a function that reverses a String
   var backwards = lower.split("").reverse("").join("");
  if (lower === backwards) {
    return true
  } else {
    return false
  }
}

palindrome("race caR 7")
