
var div = document.createElement("div")
div.id = "slides"
document.body.appendChild(div)




var img = document.createElement("img")
img.id="img1"
img.src = "../photos/face-rec.png"

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img2"
img.src = "../photos/hackathon.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img3"
img.src = "../photos/slide-graph2.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img4"
img.src = "../photos/goodsam.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)


var img = document.createElement("img")
img.id="img5"
img.src = "../photos/graph.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img6"
img.src = "../photos/img-rec.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img7"
img.src = "../photos/slide-graph1.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)

var img = document.createElement("img")
img.id="img8"
img.src = "../photos/umichigan.png"
img.style.display='none'

document.getElementById("slides").appendChild(img)


var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot1"
pp.style.backgroundColor="DimGray"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot2"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot3"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot4"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot5"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot6"
document.getElementById("slides").appendChild(pp)

var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot7"
document.getElementById("slides").appendChild(pp)


var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot8"
document.getElementById("slides").appendChild(pp)


var num = 1

function Switch() {
  document.getElementById("img"+num).style.display="none"
  document.getElementById("dot"+num).style.backgroundColor = "#bbb"
  if (num===8){
    num=0
  }
  num +=1
  document.getElementById("img"+num).style.display="block"
  document.getElementById("dot"+num).style.backgroundColor = "DimGray"
  time()
}
function time(){
  setTimeout(Switch,4000)
}
time()
