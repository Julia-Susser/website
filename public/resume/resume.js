document.getElementById("nav_resume").classList.add("active")
document.write(`<div id="resume">
<div id="expierience">
<h3>EXPIERIENCE</h3>
<dl>
<dt id="tit">Research Internship for University of Chicago Research Specialist <a href='https://bfi.uchicago.edu/scholar/alex-weinberg/' target='_blank'>Alex Weinberg</a></dt>
<br>
<dt id="sub">Coded <a href="https://github.com/Julia-Susser/Uchicago-Research-Work" target="_blank">data and graphs</a> in R and Python for UChicago Economist Alex Weinberg. Footnoted in official research paper that will be published. </dt>

<hr>
<dt id="tit">App and Website Developer, Good Samaritan Family Resource Center</dt>
<br>
<dt id="sub">Programming volunteer and donor React-Native App and Node.js <a href="https://blooming-badlands-32154.herokuapp.com/home/" target="_blank">website</a> for Good Samaritan Family Resource Center. Currently App is in testing stages and will be deployed very soon.</dt>

<hr>
<dt id="tit">Closed End Fund Index, Programmer</dt>
<br>
<dt id="sub">Sole Developer of algorithm and <a href="https://closedendfundindexus.com" target="_blank">website</a> that builds a portfolio to mirror an indexes such as the S&P 500 and JNK, allowing clients to purchase an index at a discount.</dt>


<hr>
<dt id="tit">Investment Club, Urban School of San Francisco: President</dt>
<br>
<dt id="sub">Manages $100,000+ fund for the Urban School. Teaches new members key
concepts surrounding smart investing; brings in speakers, runs a stock simulator and gives presentations.</dt>

<hr>
<dt id="tit">Coding Club, Urban School of San Francisco: President</dt>
<br>
<dt id="sub">Creates lesson plans in intro to programming such as python, machine learning, matplotlib and pandas. Helps people learn the terminal and code editors.</dt>

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
  Completed Python 3, Statistics with Numpy, Matplotlib, R, Building JavaScript Websites, JavaScript, HTML, CSS, Web servers.
  </dt>


<hr>
<dt id="tit">Congregation Emanu El, San Francisco: Assistant Teacher</dt>
<dt id="tit">September 2018- May 2020</dt>
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
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "R"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("UL")
txt.id = "listy2"
txt.innerHTML = `
<li>ggplot2</li>
<li>Data Cleaning and Machine Learning</li>
`
document.getElementById("skills").appendChild(txt)


var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "HTML, CSS, JavaScript"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Node.js (Bots (webhooks), website server)"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "React Native"
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("hr")
document.getElementById("skills").appendChild(txt)

var txt = document.createElement("p")
txt.innerHTML = "Very basic C++ and PHP"
document.getElementById("skills").appendChild(txt)

var div = document.createElement("div")
div.id = "awards"
document.getElementById("left").appendChild(div)





/////////////////////////////////////////////////////////////////////////////////////////

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
