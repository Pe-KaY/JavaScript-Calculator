const calculation = () => {
  const equalBtn = document.getElementById("equals")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")

  equalBtn.addEventListener("click", () => {
    // stores input string into array
    let str = topDisplay.textContent.split("")

    // replaces ' · ' with ' * '(multiply) if present
    // and finally reduces the array to a string expression to be calculated eg '33*5'
    let result = str.reduce((acc, el) => {
      if (el === "·") {
        return acc + "*"
      }
      return acc + el
    }, "")

    // this replaces '--' from the string such as '5--1' to '5-1'
    result = result.replace(/\-\-/, "-")

    //  uses eval method to interpret the string as a javascript code producing value
    // eg '33*5' will be interpreted as 33 * 5 which will return 165
    topDisplay.textContent += `=${eval(result)}`
    downDisplay.textContent = eval(result)
  })
}

export default calculation
