
var div = document.createElement("div")
div.id = "slides"
document.body.appendChild(div)




var img1 = document.createElement("img")
img1.id="img1"
img1.src = "./photos/bridge.jpeg"
img1.height=100
document.getElementById("slides").appendChild(img1)

var img2 = document.createElement("img")
img2.id="img2"
img2.src = "./photos/italy.jpeg"

img2.height=100
document.getElementById("slides").appendChild(img2)
img1 = document.getElementById("img1")
img2 = document.getElementById("img2")
var num = 1

function Switch() {
  document.getElementById("img"+num).style.display="none"
  num +=1
  document.getElementById("img"+num).style.display="block"
}
setTimeout(Switch,2000)
