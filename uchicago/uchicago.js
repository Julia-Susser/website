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
pp.innerHTML = "Coded in R studio with R and GGplot2. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/R%20graphs/mean_log_wage_2digit.Rmd' target='_blank'>here.</a><br><br>This graph highlightes how medium wage jobs have decreased in wage due to automation. Between 1980-2000, production was automated and therefore there was less need for people in the Production/Operators field. The Production/Operators field used to be unpleasant jobs in a factory, so they were medium wage. However, now that there is no need for factory workers, there are Production/Operatoring jobs because almost all the work has been replaced by machines. Therefeore, more people have been\ diverted to Service jobs or in some cases, higher expertised jobs."
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
pp.innerHTML = "Graph is an emulation of a graph in Autodorn's Economic Review."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy2"
pp.style.display = "none"
pp.innerHTML = "Coded in Jupyter notebook with Python, Pandas, Numpy, and Matplotlib. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/Pretty%20Graphs.ipynb' target='_blank'>here.</a><br><br>The variance of log hourly wages speaks to how wealth ineqality has increased. The variance is the standard deviation squared, so it tells you how spread out the data is.\
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
pp.innerHTML = "Graph is an emulation of a graph in Autodorn's Economic Review."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy3"
pp.style.display = "none"
pp.innerHTML = "Coded in Jupyter notebook with Python, Pandas, Numpy, and Matplotlib. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/Pretty%20Graphs.ipynb' target='_blank'>here.</a><br><br>Because women have consistently increased their annual hours whereas men have stayed stagnent at around 2100 hours,\
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
pp.innerHTML = "Graph is an emulation of a graph in Autodorn's Economic Review."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy4"
pp.style.display = "none"
pp.innerHTML = "Coded in Jupyter notebook with Python, Pandas, Numpy, and Matplotlib. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/Pretty%20Graphs.ipynb' target='_blank'>here.</a><br><br>These graphs are very similar in shape where in 1980s, the average age decreases, signaling that a new generation had entered the workforce. However, it is also notable that the average only fluctuates by 3 years throughout the entire graph, showing that the average age will stay pretty much the same as new generations enter the workforce.\
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
divvy.id = "code"
document.body.appendChild(divvy)

var pp = document.createElement("P")
pp.innerHTML = "Check out my Research code <a href=https://github.com/Julia-Susser/Research-Work>here.</a>"
document.getElementById("code").appendChild(pp)

var divvy = document.createElement("div")
divvy.id = "overview"
document.body.appendChild(divvy)

var pp = document.createElement("P")
pp.innerHTML = "The summer of 2020, I worked for University of Chicago Economist and Researcher Alex Weinberg. My first task was to used Python and Pandas to clean U.S. census data, taking it from a dta file and converting it in to a csv file. Along with creating new organized columns, I also merged in government occupation and educational codes, which allowed me to drop falty and incomplete rows, adjust for inflation, and let go of data below 50% of the minimum wage. Next, using Matplotlib,\ Numpy and Pandas aggregates, I graphed the weighted mean wage, weighted variance, and other statistics over time. First, I graphed imitations of graphs from Autodorn's Economic Review in order to check that our data was accurate. Next, I moved on to graphs in R's ggplot (a better resource for statistical graphs); some of these graphs will be included in the published research paper."
document.getElementById("overview").appendChild(pp)
