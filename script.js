function carregar() {
  var msg = document.getElementById("msg")
  var titulo = document.getElementById("titulo")
  var img = document.getElementById("image")
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `Agora são ${hora} horas`

  if (hora >= 0 && hora < 12) {
    img.src = "img/photo1.jpg"
    document.body.style.background = "#FF004D"
    titulo.innerHTML = "Bom dia!"
  } else if (hora >= 12 && hora < 18) {
    img.src = "img/photo2.jpg"
    titulo.innerHTML = "Boa tarde!"
  } else {
    img.src = "img/photo3.jpg"
    document.body.style.background = "#040D12"
    titulo.innerHTML = "Boa noite!"
  }
}
