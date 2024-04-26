const numbersInput = () => {
  const numbers = document.querySelectorAll(".numbers")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")
  const operators = document.querySelectorAll(".operators")
  const limit = document.querySelector(".display__down")

  numbers.forEach((num) => {
    num.addEventListener("click", (e) => {
      const number = e.target.textContent

      // The below condition checks for 'DIGIT LIMIT' for number input
      //   checks if the display is overflowing and stops input(used to indicate Digit limit)
      if (downDisplay.clientWidth > 280) {
        //toggles the "DIGIT LIMIT MET" which last 1 second before dissapearing
        limit.toggleAttribute("limit")

        //   disables numbers input for 1second whiles the 'DIGIT LIMIT MET' message displays
        numbers.forEach((num) => {
          num.disabled = true
        })
        //   disables operators input for 1 second whiles the 'DIGIT LIMIT MET' message displays
        operators.forEach((operator) => {
          operator.disabled = true
        })

        //   re-enables all numbers and operators and removes 'DIGIT LIMIT MET' message
        setTimeout(() => {
          limit.toggleAttribute("limit")
          numbers.forEach((num) => {
            num.disabled = false
          })
          operators.forEach((operator) => {
            operator.disabled = false
          })
        }, 1000)

        return
      }

      // if the 'DIGIT LIMIT' is not met then the below code runs:

      // checks if topDisplays is showing a result eg: 5*5=25
      // then replaces both top and Down displays with fresh new numbers
      if (topDisplay.textContent.match(/=/)) {
        topDisplay.textContent = ""
        downDisplay.textContent = ""
      }

      // checks if current input is (X,/,-,+ or . ) then it shows that alone in downDisplay
      if (
        downDisplay.textContent.length == 1 &&
        downDisplay.textContent.match(/^[/x\+\-]$/)
      ) {
        downDisplay.textContent = ""
      }

      //   checks for first input and displays the input instead of 0
      if (
        downDisplay.textContent.length < 2 &&
        downDisplay.textContent == "0" &&
        topDisplay.textContent == ""
      ) {
        downDisplay.textContent = downDisplay.textContent = ""
      }

      // input entered  are displayed if the above conditions are not met
      topDisplay.textContent += number
      downDisplay.textContent += number

      //  After input this Prevents numbers to start with 2 or more zeros eg: 007
      if (topDisplay.textContent == "00" || downDisplay.textContent == "00") {
        topDisplay.textContent = topDisplay.textContent.replace(/^00/, "0")
        downDisplay.textContent = downDisplay.textContent.replace(/^00/, "0")
      }
    })
  })
}

export default numbersInput
