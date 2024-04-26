const subtract = () => {
  const subTr = document.getElementById("subtract")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")

  subTr.addEventListener("click", () => {
    const subtSymbol = subTr.textContent

    // if theres a result showing in topDisplay eg: 5*5=25
    // the 5*5 part will be cleared and the result 25 will be left
    // then the addition will be performed on the result
    //  eg: 5*5=25 will be 25- (new number input)
    if (topDisplay.textContent.match(/=/)) {
      topDisplay.textContent = topDisplay.textContent.replace(/.*=(?=\d+)/, "")
    }

    // prevent operations like 1 --- (given number) or --(given number) or +-- (given number)
    if (
      topDisplay.textContent.match(/^\-$/) ||
      topDisplay.textContent.match(/\-\-$/) ||
      topDisplay.textContent.match(/[/·.\-\+]-$/)
    ) {
      return
    }

    // Allows operations like 1 -- (given number).
    if (topDisplay.textContent.match(/[/·.\-\+]$/g)) {
      topDisplay.textContent += "-"
      downDisplay.textContent = "-"
      return
    }

    // displays input
    topDisplay.textContent += subtSymbol
    downDisplay.textContent = subtSymbol

    // prevent two or more '/' characters
    if (topDisplay.textContent.match(/^\-\-$/)) {
      topDisplay.textContent = topDisplay.textContent.replace(/^\-\-$/, "-")
    }
    if (topDisplay.textContent.match(/\-\-\-/)) {
      topDisplay.textContent = topDisplay.textContent.replace(/\-\-\-/, "--")
    }
  })
}

export default subtract
