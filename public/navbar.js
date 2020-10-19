/*heroku ps:resize web=hobby
Scaling dynos on ⬢ juliasusser-website... done
type  size   qty  cost/mo
────  ─────  ───  ───────
web   Hobby  1    7
(base) FVFX5DU9HV29:website2 jsusser$ heroku certs:auto:enable*/



document.write(
  `
  <h1>Julia Susser</h1>
  <div class="topnav">

  <a class="nav_ref" id="home" href="/home">Home</a>
  <a class="nav_ref" id="nav_resume" id="home"href="/resume">Resume</a>
    <a class="nav_ref" id="research" href="/research-internship">Research Internship</a>




    <div class="dropdown">
      <p class="dropbtn">
        Projects
      </p>

      <div class="dropdown-content">
      <a href="https://github.com/Julia-Susser" target="_blank">GitHub</a>
      <a href="https://blooming-badlands-32154.herokuapp.com/home/" target="_blank">Good Samaritan</a>
      <a href="/jeopardy" id="jeopardy">Jeopardy</a>
      <a href="/simon" id="simon">Simon</a>
      </div>

    </div>
    <a class="nav_ref"id="contactme" href="/contactme">Contact Me</a>
    </div>
    `
)
