const clear = () => {
  const clearBtn = document.getElementById("clear")
  const topDisplay = document.querySelector(".display__top")
  const downDisplay = document.querySelector(".display__down-nums")
  clearBtn.addEventListener("click", () => {
    topDisplay.textContent = ""
    downDisplay.textContent = "0"
  })
}

export default clear
