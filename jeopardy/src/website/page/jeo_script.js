

let el = document.createElement('p')
el.className ="txt"
el.innerHTML = "Date: " + date +",\n Value: $" + value + ", Category: " + category.toLowerCase()

document.body.appendChild(el)

document.write('<form action="../submit/jeo-submit.html" method="GET" id="formey" class="txt">')

document.write('<label for="quest"><h3> '+question+': </h3> </label>')
name_id = num + "/" + num2
document.write('<input id="quest" type="text" name="'+name_id+'">')
document.write('</form>')


document.write("<div id='hey'></div>")

let butt = document.createElement("BUTTON");

butt.id = "hint"

butt.innerHTML = "Hint";
document.getElementById("hey").appendChild(butt);


let ans = document.createElement('p');

ans.id = "ansey";
let first_letter = answer[0]

ans.innerHTML = "First Letter: " + first_letter;
document.getElementById("hey").appendChild(ans);

var br = document.createElement('br')
document.getElementById("hey").appendChild(br);


var a = document.createElement('a')
a.className="reload"
a.href="./jeopardy.html"
a.innerHTML="Try Again!"
document.getElementById("hey").appendChild(a);

var pp = document.createElement('P')
pp.id="code"
pp.innerHTML="Code for Jeopardy Game <a href=https://github.com/Julia-Susser/jeopardy target=_blank>here</a>"
document.body.appendChild(pp)


hint = document.getElementById("hint")
ansey = document.getElementById("ansey")


hint.onmouseover = function(){
  ansey.style.display = 'block'
}
document.onmouseout = function(){
  el.innerHTML = "BYE!"
}
document.onmouseover = function(){
  el.innerHTML = "Date: " + date +",\n Value: $" + value + ", Category: " + category.toLowerCase()
}

let ann = function(){
  ansey.style.display = 'none'
}
hint.onmouseout = ann
