
alert("Welcome!")
function insert(val){
  document.getElementById("output").value+=val;
}
function equal(){
  let x = document.getElementById("output").value;
  let y = eval(x); 
  document.getElementById("output").value=y; 
}
function clr(){
  document.getElementById("output").value="";
}
function backspace(){
    var prevalue=document.getElementById("output").value;
    document.getElementById("output").value=prevalue.substr(0,prevalue.length-1);
}
function ac(){
document.getElementById("output").value="";
}
