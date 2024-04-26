const addition = () => {
  const add = document.getElementById("add")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")

  add.addEventListener("click", () => {
    const addSymbol = add.textContent

    // if theres a result showing in topDisplay eg: 5*5=25
    // the 5*5 part will be cleared and the result 25 will be left
    // then the addition will be performed on the result
    //  eg: 5*5=25 will be 25+ (new number input)
    if (topDisplay.textContent.match(/=/)) {
      topDisplay.textContent = topDisplay.textContent.replace(/.*=(?=\d+)/, "")
    }

    // prevent multiple operations like 1 -x+ 2.
    if (topDisplay.textContent.match(/[/·.\-\+]$/g)) {
      topDisplay.textContent = topDisplay.textContent.replace(
        /[/·.\-\+]*[/·.\-\+]$/g,
        addSymbol
      )
      downDisplay.textContent = addSymbol
      return
    }

    // displays the input
    topDisplay.textContent += addSymbol
    downDisplay.textContent = addSymbol

    // prevent two or more '/' characters
    if (topDisplay.textContent.match(/\+\+/)) {
      topDisplay.textContent = topDisplay.textContent.replace(/\+\+/, "+")
    }
  })
}

export default addition
