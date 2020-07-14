
var txt = document.createElement("h2")
txt.innerHTML = "Free Form Projects"
document.body.appendChild(txt)

var div = document.createElement("div")
div.id = "Python"
document.body.appendChild(div)

var txt = document.createElement("p")
txt.innerHTML = "<span style='font-size:20px; font-weight:bold;'>Python</span> <hr>  <span style='font-size:15px; font-weight:bold;'>Jeopardy</span> <br> Coded with Python, SQL and Regular Expressions. <br> <a href=https://github.com/Julia-Susser/jeopardy>Check out code in GitHub</a> </br> Went through JSON file, cut out left over html fragment using regular experessions, and organized it into SQL database. Then I took it out of the database and put it into a long dictionary to be read in JavaScript for the website.\
<hr>  <span style='font-size:15px; font-weight:bold;'>Search Wikipedia from Python</span> <br> Coded with Python, Urrlib and Beautiful Soup. <br> <a href='https://github.com/Julia-Susser/spider_wiki' target='_blank'>Check out code in GitHub</a> </br> Searches random inputs in wikipedia and returns the most used, longer than 4 letter word.\
<hr>  <span style='font-size:15px; font-weight:bold;'>Read through NYC bus stops using the bus API</span> <br> Coded with Python, Urllib, and SQL. <br> <a href='https://github.com/Julia-Susser/bus_api' target='_blank'>Check out code in GitHub</a> </br>Grabs different long-lats from the bus API and reads the JSON stops. Then I put it into a  many to many database.\
<hr>  <span style='font-size:15px; font-weight:bold;'>Government Complaint CSV file</span> <br> Coded with Python. <br> <a href='https://github.com/Julia-Susser/complaints' target='_blank'>Check out code in GitHub</a> </br> Read through government complaints, puts it into multi-table datbase, and selects most common data to put in JSON file.\
<hr>  <span style='font-size:15px; font-weight:bold;'>Linear Regressions</span> <br> Coded with Python, Pandas, Matplotlib, skilearn, statsmodel. <br> <a href='https://github.com/Julia-Susser/linear_regressions' target='_blank'>Check out code in GitHub</a> </br> Some practice linear regressions. Some of which are on census data from my Research internship.\
"
document.getElementById("Python").appendChild(txt)

var div = document.createElement("div")
div.id = "JavaScript"
document.body.appendChild(div)

var txt = document.createElement("p")
txt.innerHTML = "<span style='font-size:20px; font-weight:bold;'>JavaScript, HTML, and CSS</span> <hr>  <span style='font-size:15px; font-weight:bold;'>Jeopardy</span> <br> <a href=https://github.com/Julia-Susser/jeopardy>Check out code in GitHub</a> </br> Went through JavaScript dictionary from Python code, then I created a form that when submited tells you if I answered correctly. The parameters for the answer on the form were the question number in order to check if you guessed right on the other page.\
<hr>  <span style='font-size:15px; font-weight:bold;'>Simon</span> <br><a href='https://github.com/Julia-Susser/simon' target='_blank'>Check out code in GitHub</a> </br>Programmed the Simon game."
document.getElementById("JavaScript").appendChild(txt)
