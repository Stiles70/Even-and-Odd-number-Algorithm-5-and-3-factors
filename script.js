function calc() {
    if (number.value == ""){
        error.style.display = "block"
        result.style.display = "none"
    }
    else if (number.value % 2 === 0) {
        result.innerHTML = number.value + " is an even number"
        result.style.display = "block"
        error.style.display = "none"
        number.value = ""
    } else {
        result.innerHTML = number.value + " is an odd number"
        result.style.display = "block"
        error.style.display = "none"
        number.value = ""
    }
  }

  function calcc() {
    if (numberr.value == ""){
        errorr.style.display = "block"
        resultt.style.display = "none"
    }else if (numberr.value % 3 === 0 && numberr.value % 5 === 0) {
        resultt.innerHTML = "FIZZBUZZ"
        resultt.style.display = "block"
        errorr.style.display = "none"
        numberr.value = ""
    } 
    else if (numberr.value % 3 === 0) {
        resultt.innerHTML = "FIZZ"
        resultt.style.display = "block"
        errorr.style.display = "none"
        numberr.value = ""
    }  else if (numberr.value % 5 === 0) {
        resultt.innerHTML = "BUZZ"
        resultt.style.display = "block"
        errorr.style.display = "none"
        numberr.value = ""
    }  
    else {
        resultt.innerHTML = numberr.value + " is not divisible by 5 and 3"
        resultt.style.display = "block"
        errorr.style.display = "none"
        numberr.value = ""
    }
  }