const decimal = () => {
  const deci = document.getElementById("decimal")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")

  deci.addEventListener("click", () => {
    const decimalSymbol = deci.textContent

    // if theres a result showing in topDisplay eg: 5*5=25
    // it will all be cleared and start afresh with 0.
    if (topDisplay.textContent.match(/=/)) {
      topDisplay.textContent = "0."
      downDisplay.textContent = "0."
    }

    // prevent user from entering multiple decimals in one set of numbers without being separated by x or + or / or -
    if (downDisplay.textContent.includes(".")) {
      return
    }

    // prevent multiple operations like 1 -x+ 2.
    if (topDisplay.textContent.match(/[/·+-]$/g)) {
      topDisplay.textContent += "0."
      downDisplay.textContent = "0."
      return
    }

    //  checks if first input is a decimal it auto starts as 0.
    if (downDisplay.textContent == "0" && topDisplay.textContent == "") {
      topDisplay.textContent = "0."
      downDisplay.textContent = "0."
      return
    }

    // displays decimal symbol
    topDisplay.textContent += decimalSymbol
    downDisplay.textContent += decimalSymbol

    // prevent two or more '..'(decimal) characters
    if (topDisplay.textContent.match(/\.\./)) {
      topDisplay.textContent = topDisplay.textContent.replace(/\.\./, ".")
    }
  })
}

export default decimal
