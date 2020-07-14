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
txt.innerHTML = "Assistant to University of Chicago Research Specialist <a href=https://bfi.uchicago.edu/scholar/alex-weinberg/>Alex Weinberg</a>"
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


var txt = document.createElement("dl")
txt.id = "listy"
document.getElementById("border").appendChild(txt)

var txt = document.createElement("dt")
var a = document.createElement("a")
a.href="#Python"
a.innerHTML="Python"
txt.appendChild(a)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dd")
var p = document.createElement("p")
p.innerHTML="SQL, Pandas, Matplotlib, Numpy"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dt")
var a = document.createElement("a")
a.href="#R"
a.innerHTML="R"
txt.appendChild(a)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dd")
var p = document.createElement("p")
p.innerHTML="GGPlot2"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dt")
var a = document.createElement("a")
a.href="#Javascript"
a.innerHTML="JavaScript, HTML, CSS (web-building)"
txt.appendChild(a)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "The Summer of 2019, I taught myslef to code primarily in Python. Using codeacamy, an online resource, I developed the fundamentals of Python. However, my coursera corse, Python for Everybody, bolstered this knowledge, giving me skills in Parsing CSV, JSON, & XML, SQL(primarily), APIS, Urllib (grabbing information from the web), Beautiful Soup (parsing HTML), Element Tree (parsing xml), Regular Expressions.\
I followed this knowledge with building my own projects such as reading government complaints from a CSV files, using the new york bus API, and organizing both in a SQL database. Indeed, I found that I wanted to use this organized data, so I took courses in Web Building in Javascript, HTML and CSS. My final project of the year was organizing Jeopardy JSON file into a database, then reading it into a website where you can answer the questions in a form. Another really cool project was my wikipedia search, where you could up anything in wikipedia and it would tell you the most used longer than 4-digit word on the site."
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "The summer of 2020, I worked for <a href=https://bfi.uchicago.edu/scholar/alex-weinberg/>UChicago Researcher Alex Weinberg</a>. I used Python and Pandas to clean U.S. census data in a dta file and convert in to a organized csv file. Some of the things I did to clean the data were merging in government occupation and educational codes, dropping incomplete rows, adjusting for inflation, and leting go data below 50% of the minimum wage. While I first organized the occupational codes using Python, I was later instructed to transfer to different and more effective codes that varied by decade (David Dorn occupational codes). Next, using matplotlib, I graphed the weighted mean wage, weighted variance, ect.. I used numpy to convert my aggregates into weighted stats before plotting the data. My first graphs were imitations of previous graphs from Autodorn's economic review in order to check our data. These graphs almost perfectly mirrored the published graphs! Next, I moved on to making new graphs in R's ggplot, which is an incredible resource for coders because it makes summary statistics and aggregates really easy. A few of the graphs I made, including some that will be published in an official research paper, are highlighted under the Research Internship tab."
document.getElementById("writing").appendChild(txt)
