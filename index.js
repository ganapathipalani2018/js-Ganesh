// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var firstInput = document.querySelector("#firstInp");
var secondInput = document.querySelector("#secondInp");
var thirdInput = document.querySelector("#thirdInp");
var checkBtn = document.querySelector("#checkBtn")

var isOutput = document.querySelector("#isOutput");

checkBtn.onclick = function(){
  const a = firstInput.value;
  const b = secondInput.value;
  const c = thirdInput.value;
  if(a>b && a>c){
    isOutput.innerHTML = `${'first input value is high: ' + a}`;
  }
  else if(b > a && b > c){
    isOutput.innerHTML = `${'second input value is high: '+ b}`;
  }
  else if(c > a && c > b){
    isOutput.innerHTML = `${'third input value is high: '+ c}`;
  }
  else{
    isOutput.innerHTML = `${'three values are equal: ' + a}`;
  }
  return false;
}
