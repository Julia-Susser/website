document.getElementById("research").classList.add("active")
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



//-----------------------------------


var graph = document.createElement("img")
graph.id = 'graph1'
graph.src = "../photos/all-graphs.jpg"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

var pp = document.createElement("h4")
pp.id="graphyy1"
pp.innerHTML = "Check out my Research Code here"
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy1"
pp.innerHTML = "Summer 2019, I worked for University of Chicago Economist Alex Weinberg for his paper on how jobs have \
become more and less similar between 1983-2001"
document.getElementById("graphs").appendChild(pp)



//-----------------------------------

var graph = document.createElement("img")
graph.src = "../photos/r.png"
graph.id ='graph2'
graph.style.display = "none"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

var pp = document.createElement("h4")
pp.id="graphyy2"
pp.style.display = "none"
pp.innerHTML = "Graph will be highlighted in Research Paper."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy2"
pp.style.display = "none"
pp.innerHTML = "Coded in R studio with R and GGplot2. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/R%20graphs/mean_log_wage_2digit.Rmd' target='_blank'>here.</a><br><br>This graph highlightes how medium wage jobs have decreased in wage due to automation. Between 1980-2000, production was automated and therefore there was less need for people in the Production/Operators field. The Production/Operators field used to be unpleasant jobs in a factory, so they were medium wage. However, now that there is no need for factory workers, there are Production/Operatoring jobs because almost all the work has been replaced by machines. Therefeore, more people have been\ diverted to Service jobs or in some cases, higher expertised jobs."
document.getElementById("graphs").appendChild(pp)


//---------------------------------------


var graph = document.createElement("img")
graph.id = 'graph3'
graph.style.display = "none"
graph.src = "../photos/pca.jpg"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

var pp = document.createElement("h4")
pp.id="graphyy3"
pp.style.display = "none"
pp.innerHTML = ""
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy3"
pp.style.display = "none"
pp.innerHTML = "Coded in R studio with R and GGplot2. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/Pretty%20Graphs.ipynb' target='_blank'>here.</a><br><br>\
This summer, I used Principal Component Analysis to determine whether occupations have become more similar to each\
other over time based on the skills required (data gathered through employment advertisement). PCA code uses multiple\
linear regressions and different variables to group items, in this case, occupations. The y-axis on the graph below \
shows how much more or less similar to the occupations within the sector have become to each other. The graph highlights\
how jobs that require more routine manual skill (based on ads) have become more similar to each other, as the average \
total distances from the mean of PCs of the jobs within those sectors has become smaller."
document.getElementById("graphs").appendChild(pp)



//-----------------------------------------------------


var graph = document.createElement("img")
graph.id = 'graph4'
graph.style.display = "none"
graph.src = "../photos/age.png"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

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

//---------------------------------------


var graph = document.createElement("img")
graph.id = 'graph5'
graph.style.display = "none"
graph.src = "../photos/wages.png"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

var pp = document.createElement("h4")
pp.id="graphyy5"
pp.style.display = "none"
pp.innerHTML = "Graph is an emulation of a graph in Autodorn's Economic Review."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy5"
pp.style.display = "none"
pp.innerHTML = "Coded in Jupyter notebook with Python, Pandas, Numpy, and Matplotlib. Look at the code <a href='https://github.com/Julia-Susser/Research-Work/blob/master/src/Graphs/Pretty%20Graphs.ipynb' target='_blank'>here.</a><br><br>The variance of log hourly wages speaks to how wealth ineqality has increased. The variance is the standard deviation squared, so it tells you how spread out the data is.\
Because the data because increasingly more spread out, there is a greater difference in wages between higher and lower wage fields.\
The mean wage graph for females steadly increased through the 1980s-2000s compared to males who stayed mostly consistent at 21$. This signifies how during this era women entered more lucrative careers and started having full-time jobs (working longer hours). However, we know it is not a product of lots of women entering the workforce, as the mean age mirrors that of men (also more women in workforce should not necessarily lead to higher wages)."
document.getElementById("graphs").appendChild(pp)



//-----------------------------------------------------


var graph = document.createElement("img")
graph.id = 'graph6'
graph.style.display = "none"
graph.src = "../photos/annual_hours.png"
graph.height= "100"
document.getElementById("graphs").appendChild(graph)

var pp = document.createElement("h4")
pp.id="graphyy6"
pp.style.display = "none"
pp.innerHTML = "Graph is an emulation of a graph in Autodorn's Economic Review."
document.getElementById("graphs").appendChild(pp)

var pp = document.createElement("p")
pp.id="graphy6"
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



//-----------------------------------



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
var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot5"
document.getElementById("graphs").appendChild(pp)
var pp = document.createElement("span")
pp.className = "dot"
pp.id="dot6"
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
  if(num>6){
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
    num = 6
  }
  document.getElementById("graph"+num).style.display = 'block'
  document.getElementById("graphyy"+num).style.display = 'block'
  document.getElementById("graphy"+num).style.display = 'block'
  document.getElementById("dot"+num).style.backgroundColor = "DimGray"

}

var divvy = document.createElement("div")
divvy.id = "code"
document.body.appendChild(divvy)
