var div = document.createElement("div")
div.id = "writing"
document.body.appendChild(div)
var img = document.createElement("img")
img.src = "./photos/StudentPhoto.jpg"
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
txt.innerHTML = "Assistant to University of Chicago Research Specialist <a href=https://bfi.uchicago.edu/scholar/alex-weinberg/ target='_blank'>Alex Weinberg</a>"
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
var p = document.createElement("p")
p.id="big"
p.innerHTML="Python"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dd")
var p = document.createElement("p")
p.id="small"
p.innerHTML="SQL, Pandas, Matplotlib, Numpy"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dt")
var p = document.createElement("p")
p.id="big"
p.innerHTML="R"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dd")
var p = document.createElement("p")
p.id="small"
p.innerHTML="GGPlot2"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("dt")
var p = document.createElement("p")
p.id="big"
p.innerHTML="JavaScript, HTML, CSS (web-building)"
txt.appendChild(p)
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "The Summer of 2019, I taught myslef to code in Python using codeacamy and Chuck Severence's Coursera University of Michigan Python for Everbody course. I learned how to apply the Python fundamentals to using SQL, parsing CSV, JSON, & XML, grabbing information from the web with Urllib, APIs, Beautiful Soup (parsing HTML), Element Tree (parsing xml), and Regular Expressions.\
After taking these courses, I began building my own <a href='./projects/projects.html' target='_blank'>projects</a> such using the New York bus API and reading through a government complaint CSV file. Once I had mastered organizing data, I decided to learn JavaScript, HTML and CSS to create website that would highlight my work, including this one. For my final project, I took a Jeopardy JSON file, organized it into a multi-table SQL database, then selected the data into into a website that you\ can see <a href='./jeopardy/src/website/page/jeopardy.html' target='_blank'>here</a>."
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "The summer of 2020, I worked for University of Chicago Economist and Researcher <a href=https://bfi.uchicago.edu/scholar/alex-weinberg/ target=_blank>Alex Weinberg</a>. My first task was to used Python and Pandas to clean U.S. census data, taking it from a dta file and converting it in to a csv file. Along with creating new organized columns, I also merged in government occupation and educational codes, which allowed me to drop falty and incomplete rows, adjust for inflation, and let go of data below 50% of the minimum wage. Next, using Matplotlib, Numpy and Pandas aggregates, I graphed the weighted mean wage, weighted variance, and other statistics over time. First, I graphed imitations of graphs from Autodorn's Economic Review in order to check that our data was accurate. Next, I moved on to graphs in R's ggplot (a better resource for statistical graphs); some of these graphs will be included in the published research paper."
document.getElementById("writing").appendChild(txt)

var txt = document.createElement("p")
txt.id="code"
txt.innerHTML = " Website Built and Designed by Julia Susser. Look at my code <a href='https://github.com/Julia-Susser/website'target='_blank'>here.</a>"
document.getElementById("writing").appendChild(txt)
