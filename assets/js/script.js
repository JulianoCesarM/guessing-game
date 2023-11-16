const numberSecret = parseInt(Math.random() * 1001)
let contador = 0

function checkNumber() {
  const resp = document.querySelector(".resp")
  resp.hidden = false
  resp.classList.add("resp")

  let numberInput = document.querySelector("#numberSecret")
  numberInput = Number(numberInput.value)

  console.log(
    "Input " + numberInput,
    "Secret " + numberSecret,
    "Count " + contador
  )
  if (contador == 10) {
    return (resp.innerHTML = `Acabou o número de tentativas`)
  }
  if (numberInput === numberSecret) {
    resp.style.backgroundColor = "green"
    resp.innerHTML = `PARABÉNS!</br>Número de tentativas foi de ${contador}`
  } else {
    resp.style.backgroundColor = "red"
    contador += 1
    if (numberSecret > numberInput) {
      resp.innerHTML = `Errado, TENTE NOVAMENTE!</br> O número secreto é maior`
    } else {
      resp.innerHTML = `Errado, TENTE NOVAMENTE!</br> O número secreto é menor`
    }
  }
}
