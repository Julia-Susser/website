var photos = document.createElement("div")
photos.id = "full"
document.body.appendChild(photos)

var back = document.createElement("button")
back.innerHTML = "&#10094;"
back.id="back"
document.getElementById("full").appendChild(back)

var divvy = document.createElement("div")
divvy.id = "graphs"
document.getElementById("full").appendChild(divvy)


var graph1 = document.createElement("img")
graph1.src = "../photos/r.png"
graph1.id ='graph1'
graph1.height= "100"
document.getElementById("graphs").appendChild(graph1)

var pp = document.createElement("h4")
pp.id="graphyy1"
pp.style.display = "block"
pp.innerHTML = "Graph will be highlighted in Research Paper."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy1"
pp.style.display = "block"
pp.innerHTML = "This graph highlightes how medium wage jobs have decreased in wage due to automation. Between 1980-2000, production was automated and therefore there was less need for people in the Production/Operators field. The Production/Operators field used to be unpleasant jobs in a factory, so they were medium wage. However, now that there is no need for factory workers, there are Production/Operatoring jobs because almost all the work has been replaced by machines. Therefeore, more people have been\ diverted to Service jobs or in some cases, higher expertised jobs."
document.getElementById("graphs").appendChild(pp)

var graph2 = document.createElement("img")
graph2.id = 'graph2'
graph2.style.display = "none"
graph2.src = "../photos/wages.png"
graph2.height= "100"
document.getElementById("graphs").appendChild(graph2)

var pp = document.createElement("h4")
pp.id="graphyy2"
pp.style.display = "none"
pp.innerHTML = "Graph is an emulation of ..."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy2"
pp.style.display = "none"
pp.innerHTML = "The variance of log hourly wages speaks to how wealth ineqality has increased. The variance is the standard deviation squared, so it tells you how spread out the data is.\
Because the data because increasingly more spread out, there is a greater difference in wages between higher and lower wage fields.\
The mean wage graph for females steadly increased through the 1980s-2000s compared to males who stayed mostly consistent at 21$. This signifies how during this era women entered more lucrative careers and started having full-time jobs (working longer hours). However, we know it is not a product of lots of women entering the workforce, as the mean age mirrors that of men (also more women in workforce should not necessarily lead to higher wages)."
document.getElementById("graphs").appendChild(pp)

var graph3 = document.createElement("img")
graph3.id = 'graph3'
graph3.style.display = "none"
graph3.src = "../photos/annual_hours.png"
graph3.height= "100"
document.getElementById("graphs").appendChild(graph3)

var pp = document.createElement("h4")
pp.id="graphyy3"
pp.style.display = "none"
pp.innerHTML = "Graph is an emulation of ..."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy3"
pp.style.display = "none"
pp.innerHTML = "Because women have consistently increased their annual hours whereas men have stayed stagnent at around 2100 hours,\
women have been able to increase their average wage more than men (shown in graph2). With longer hours, females started \
to go into higher paying jobs and switching from part-time to full-time careers, which pay better per hour. This is in comparison with men who did not increase their population in highly \
expertised field. However, the female average wage did not surpass male average wage because men continued to have \
longer annual hours, and therefore a greater amount of people in advanced careers. \
Not only does longer annual hours indicate an increase in expertised fields, but also longer annual hours will lead to better pay as you get paid more for the last hour than the first. \
These charts clearly demonstrate \
how longer annual hours are correlated with higher wages and more advanced careers, as these charts for females and males mirror the mean wage charts by sex."
document.getElementById("graphs").appendChild(pp)

var graph4 = document.createElement("img")
graph4.id = 'graph4'
graph4.style.display = "none"
graph4.src = "../photos/age.png"
graph4.height= "100"
document.getElementById("graphs").appendChild(graph4)

var pp = document.createElement("h4")
pp.id="graphyy4"
pp.style.display = "none"
pp.innerHTML = "Graph is an emulation of ..."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy4"
pp.style.display = "none"
pp.innerHTML = "These graphs are very similar in shape where in 1980s, the average age decreases, signaling that a new generation had entered the workforce. However, it is also notable that the average only fluctuates by 3 years throughout the entire graph, showing that the average age will stay pretty much the same as new generations enter the workforce.\
 One thing we can deduce from this graph is that the reason women increased their salery more than men was not a\
result of a more women entering the work force than in the past. If a greater number of women had entered the worfoce\
in the 1980s than in the past, the average age of women would shoot down as the younger women would outweigh the\
older. But looking at the graph, this did not happen. Indeed, the average age of women completely mirrors that of\
men. Since there is not a deep decrease in average age for women, we know that the reason that women started\
getting higher saleries must be a product of women going into more lucrative fields and longer hours."
document.getElementById("graphs").appendChild(pp)

var forward = document.createElement("button")
forward.id="forward"
forward.innerHTML = "&#10095;"
document.getElementById("full").appendChild(forward)


var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot1"
pp.style.backgroundColor="DimGray"
document.getElementById("graphs").appendChild(pp)
var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot2"
document.getElementById("graphs").appendChild(pp)
var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot3"
document.getElementById("graphs").appendChild(pp)
var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot4"
document.getElementById("graphs").appendChild(pp)

back = document.getElementById("back")
forward = document.getElementById("forward")


var num = 1

forward.onclick = function(){
  document.getElementById("graph"+num).style.display = 'none'
  document.getElementById("graphyy"+num).style.display = 'none'
  document.getElementById("graphy"+num).style.display = 'none'
  document.getElementById("dot"+num).style.backgroundColor = "#bbb"
  num+=1
  if(num>4){
    num = 1
  }
  document.getElementById("graph"+num).style.display = 'block'
  document.getElementById("graphyy"+num).style.display = 'block'
  document.getElementById("graphy"+num).style.display = 'block'
  document.getElementById("dot"+num).style.backgroundColor = "DimGray"

}

back.onclick = function(){
  document.getElementById("graph"+num).style.display = 'none'
  document.getElementById("graphyy"+num).style.display = 'none'
  document.getElementById("graphy"+num).style.display = 'none'
  document.getElementById("dot"+num).style.backgroundColor = "#bbb"
  num-=1
  if(num<1){
    num = 4
  }
  document.getElementById("graph"+num).style.display = 'block'
  document.getElementById("graphyy"+num).style.display = 'block'
  document.getElementById("graphy"+num).style.display = 'block'
  document.getElementById("dot"+num).style.backgroundColor = "DimGray"

}

var divvy = document.createElement("div")
divvy.id = "overview"
document.body.appendChild(divvy)


var pp = document.createElement("P")
pp.innerHTML = "The summer of 2020, I worked for <a href=https://bfi.uchicago.edu/scholar/alex-weinberg/>UChicago Researcher Alex Weinberg</a>.\
 I used Python and Pandas to clean U.S. census data in a dta file and convert in to a organized csv file. Some of the things I did to clean the data were merging in government occupation and educational codes, dropping incomplete rows, adjusting for inflation, and leting go data below 50% of the minimum wage. While I first organized the occupational codes using Python, I was later instructed to transfer to different and more effective codes that varied by decade (David Dorn occupational codes). Next, using matplotlib, I graphed the weighted mean wage, weighted variance, ect.. I used numpy to convert my aggregates into weighted stats before plotting the data. My first graphs were imitations of previous graphs from Autodorn's economic review in order to check our data. These graphs almost perfectly mirrored the published graphs! Next, I moved on to making new graphs in R's ggplot, which is an incredible resource for coders because it makes summary statistics and aggregates really easy. A few of the graphs I made, including some that will be published in an official research paper, are highlighted here."
document.getElementById("overview").appendChild(pp)
