
document.getElementById("contactme").classList.add("active")


document.getElementById("subjecty").onkeypress = function(){
	if(this.value.length > 40){
        return false;
    }
		k = 40-this.value.length

		document.getElementById("remainingC").innerHTML =  k + " characters left"
}

document.getElementById("commenty").onkeypress = function(){

	if(this.value.length > 700){
        return false;
    }
		k = 700-this.value.length

		document.getElementById("remainingD").innerHTML =  k + " characters left"


}
function load() {

var n_email = document.getElementById("n-email").value
var subject = document.getElementById("subjecty").value
var comment = document.getElementById("commenty").value
var n_name = document.getElementById("n-name").value
var xhttp = new XMLHttpRequest();
console.log("hey")
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {

    document.getElementById("form").innerHTML = this.responseText



  }
};
const url = "/contactme-sub?&new_email="+n_email+"&new_name="+n_name+"&comment="+subject+"&subject="+comment

xhttp.open("GET", url, true);
xhttp.send();
 }
