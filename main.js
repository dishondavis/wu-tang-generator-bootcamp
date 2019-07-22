document.querySelector("button").addEventListener("click",function(){
  let inputValue = document.querySelector("input").value
  if(inputValue === inputValue.split("").reverse().join("")) {
      document.getElementsByClassName('Correct')[0].innerHTML = "PALIDROME!!"
      //alert(inputValue + "is PALIDROME")
  } else if(inputValue !== inputValue.split("").reverse().join("")) {
    document.getElementsByClassName("Correct")[0].innerHTML = "Not a Palidrome!"
  } else {
    alert("Please enter a text")
  }
  function blinkIt() {
  var blinks = document.getElementsByClassName("Correct");
  for(var i = 0, l = blinks.length; i < l; i++){
    var blink = blinks[i];
    var visiblity = blink.style.visibility;
    blink.style.visibility = visiblity == 'visible' ? 'hidden' : 'visible';
   }
 }
  setInterval(blinkIt, 1700);
});
