function cores()
{
    var myArray = ['#FFC0CB', '#7FFFD4'];    
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    document.getElementById("myDiv").style.backgroundColor = rand;
}

function calcular(){
	var end;
	var op1=parseInt(document.getElementById("recipient-name").value)
	var op2=parseInt(document.getElementById("recipient-name2").value)
	end = op1 * op2;
	alert(end);
}
function alerta() {
  var siv = document.getElementById("txt").value;
  alert(siv);
 }
