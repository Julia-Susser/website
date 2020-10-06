document.getElementById("nav_resume").classList.add("active")
document.write(`<div id="resume">
<div id="expierience">
<h3>EXPIERIENCE</h3>
<dl>
<dt id="tit">Research Internship for University of Chicago Research Specialist </a href'https://bfi.uchicago.edu/scholar/alex-weinberg/' target='_blank'>Alex Weinberg</a></dt>
<br>
<dt id="sub">Cleaned and organized census data, and made graphs in R's GGplot and Python's Matplotlib. For more, click <a href='../uchicago/uchicago.html' target='_blank'>here</a></dt>
s
<hr>
  <dt id="tit">Completed 5 Chuck Severence Coursera Python for Everybody Courses<dt>
  <dt><ul>

  <li><a href=https://www.coursera.org/account/accomplishments/certificate/BUU7NRHY6H6J target="_blank">Programming For Everybody (Getting Started with Python)</a></li>
  <li><a href=https://www.coursera.org/account/accomplishments/certificate/RNERYRB6PCLN target="_blank">Using Databases with Python</a></li>
  <li><a href=https://www.coursera.org/account/accomplishments/certificate/SZM5LMRSVB5P target="_blank">Using Python to Access Web Data</a></li>
  <li><a href=https://www.coursera.org/account/accomplishments/certificate/RNERYRB6PCLN target="_blank">Using Databases with Python</a></li>
  <li><a href=https://www.coursera.org/account/accomplishments/certificate/PS7YZUB29B4R target="_blank">Capstone: Retrieving, Processing, and Visualizing Data with Python</a></li>

  </ul>
  <hr>
  <dt id="tit">Codecademy Courses</dt>
  <dt id="sub">
  <ul>
  <li>Completed Introduction Python 3</li>
  <li>Introduction to Statistics with Numpy</li>
  <li>Introduction to Matplotlib</li>
  <li>Introduction to R</li>
  <li>Interactive to Building JavaScript Websites</li>
  <li>Introduction to JavaScript</li>
  <li>Introduction to HTML</li>
  <li>Introduction to CSS</li>
  </dt>
  </ul>
<hr>
<dt id="tit">Investment Club, Urban School of San Francisco: President</dt>
<br>
<dt id="sub">Manages $100,000+ fund for the Urban School. Teaches new members key
concepts surrounding smart investing.</dt>

<hr>
<dt id="tit">Conduct Review, Urban School of San Francisco</dt>
<dt id="tit">July 2019 - Present</dt>
<br>
<dt id="sub">A representative in deciding consequences for students who violated Academic
Honesty Policies.</dt>

<hr>
<dt id="tit">Peer Tutor, Urban School of San Francisco</dt>
<dt id="tit">September 2019 - Present</dt>
<br>
<dt id="sub">Tutor in Science, Spanish, and Math during the school day and after school.</dt>

<hr>
<dt id="tit">Computer Science 1, Urban School of San Francisco</dt>
<dt id="tit">September 2019 - November 2019</dt>
<br>
<dt id="sub">Learned about lists, recursion, shapes and games using Snap Berkeley.
Midterm Project: Snake game; Final Project: Memory Game</dt>

<hr>
<dt id="tit">Congregation Emanu El, San Francisco: Assistant Teacher</dt>
<dt id="tit">September 2018- Present</dt>
<br>
<dt id="sub">Help teach students about Judaism. Ages Kindergarten to 5th grade.</dt>

<hr>
<dt id="tit">Vision Academy, Good Samaritan Foundation: Volunteer</dt>
<dt id="tit">July 2019 - August 2019</dt>
<br>
<dt id="sub">Worked with students ages 6-10. Helping them with homework and
reading.</dt>



<dl>
</div>
</div>`)

var div = document.createElement("div")
div.id = "left"
document.getElementById("resume").appendChild(div)

var div = document.createElement("div")
div.id = "skills"
document.getElementById("left").appendChild(div)

var txt = document.createElement("h3")
txt.innerHTML = "SKILLS"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Python"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "MyList"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("LI")
txt.innerHTML = "Parse through JSON, XML CSV (and Stata with pandas)"
document.getElementById("MyList").appendChild(txt)
var txt = document.createElement("LI")
txt.innerHTML = "Urllib"
document.getElementById("MyList").appendChild(txt)
var txt = document.createElement("LI")
txt.innerHTML = "APIs"
document.getElementById("MyList").appendChild(txt)
var txt = document.createElement("LI")
txt.innerHTML = "Beautiful Soup"
document.getElementById("MyList").appendChild(txt)
var txt = document.createElement("LI")
txt.innerHTML = "Regular Expressions"
document.getElementById("MyList").appendChild(txt)
var txt = document.createElement("LI")
txt.innerHTML = "Linear Regressions with statsmodel and sklearn (uses pandas and matplotlib)"
document.getElementById("MyList").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "R"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "listy2"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("LI")
txt.innerHTML = "GGPLot2"
document.getElementById("listy2").appendChild(txt)

var txt = document.createElement("LI")
txt.innerHTML = "Linear Regressions"
document.getElementById("listy2").appendChild(txt)


var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "SQL"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "listy"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("LI")
txt.innerHTML = "Relational Database"
document.getElementById("listy").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Pandas"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Numpy"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Matplotlib"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "HTML, CSS, JavaScript (basic, website_building)"
document.getElementById("skills").appendChild(txt)




var div = document.createElement("div")
div.id = "awards"
document.getElementById("left").appendChild(div)


var txt = document.createElement("h3")
txt.innerHTML = "AWARDS"
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("a")
txt.id="awardy"
txt.innerHTML = "The <a href='https://www.linkedin.com/feed/update/urn:li:activity:6667558688112422912' target='_blank'> 2nd place winner </a>in Girls in Tech Hackathon (prize is $1,000). November 2nd, 3rd, 2019."
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "<a href='../photos/acbl.pdf' target='blank'>Junior Master</a> in Bridge ACBL. June 2019."
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Scholarship to National Bridge Championship; Atlanta, GA"
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("awards").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "2nd Place CardRook Pairs National Bridge Championship"
document.getElementById("awards").appendChild(txt)
