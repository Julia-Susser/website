
//document.getElementById("home").classList.add("active")




var div = document.createElement("div")
div.id = "writing"
document.body.appendChild(div)
var img = document.createElement("img")
img.src = "../photos/StudentPhoto.jpg"
img.id = "TextWrap"
img.height= "100"
document.getElementById("writing").appendChild(img)
var txt = document.createElement("h2")
txt.id = "name"
txt.innerHTML = "Julia E. Susser"
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("h3")
txt.id="job"
txt.innerHTML = "Programmer"
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Assistant to University of Chicago Economic Researcher Alex Weingberg"
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Good Samaritan Family Resource Center Node.js website and React-Native app developer."
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Student at the Urban School of San Francisco (2018-2022)"
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("div")
txt.id = "border"
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Skills:"
document.getElementById("border").appendChild(txt)



var txt = document.createElement("p")
txt.id = "sk"
txt.innerHTML = "Python"
document.getElementById("border").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "MyList"
txt.innerHTML = `
<li>Pandas</li>
<li>SQL</li>
<li>Matplotlib</li>
<li>Numpy</li>
<li>Data Cleaning and Machine Learning</li>
<li>Keras Models</li>
<li>Image and Facial Recognition</li>
<li>Scraping Google with Selenium Webdriver</li>
<li>Flask</li>
`
document.getElementById("border").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("border").appendChild(txt)

var txt = document.createElement("p")
txt.id = "sk"
txt.innerHTML = "R"
document.getElementById("border").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "listy2"
txt.innerHTML = `
<li>ggplot2</li>
<li>Data Cleaning and Machine Learning</li>
`
document.getElementById("border").appendChild(txt)


var txt = document.createElement("hr")
document.getElementById("border").appendChild(txt)

var txt = document.createElement("p")
txt.id = "sk"
txt.innerHTML = "HTML, CSS, JavaScript (Ajax, Jquery)"
document.getElementById("border").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("border").appendChild(txt)

var txt = document.createElement("p")
txt.id = "sk"
txt.innerHTML = "Node.js (Bots (webhooks), website server)"
document.getElementById("border").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("border").appendChild(txt)

var txt = document.createElement("p")
txt.id = "sk"
txt.innerHTML = "React Native"
document.getElementById("border").appendChild(txt)






var txt = document.createElement("p")
txt.id="code"
txt.innerHTML = " Website Built and Designed by Julia Susser.</a>"
document.getElementById("writing").appendChild(txt)
