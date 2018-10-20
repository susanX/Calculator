<<<<<<< HEAD
var collectInput = 0;
var ev;
// TODO https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Legacy_Internet_Explorer_and_attachEvent
var val;
var displayStr = ""
//TODO: GET INPUT 
function addEL(e) {
  if(e.target !== e.currentTarget){
    val = e.target.value;
    
    //--------------------------------------
    //remove c and =
    //-------------------------------------
    if(val==="c"){
      val = 0;
      displayStr = 0;
      ev = 0;
      collectInput = 0;
       document.getElementById("display").innerHTML = 0;
       document.getElementById("output").innerHTML = 0;
    } else if(val==="="){
     evaluate(collectInput);
    } else {
    //--------------------------------------
    //call function displayVal with 1234567890.
    //-------------------------------------
      displayVal(val);
    }
  }
  e.stopPropagation();
}
//TODO: DISPLAY INPUT
function displayVal(val){
  //TODO - REMOVE 1st 0
  if(collectInput===0){
    collectInput = "";
  }
  
  collectInput += val;
  //console.log("away:", val);
  document.getElementById("display").innerHTML = collectInput;
  
}
//TODO: EVALUATE INPUT
function evaluate(collectInput){
  
  // console.log("ev:", ev);
  console.log("=:",val);
  ev = eval(collectInput);
  console.log("ev:",ev);
  document.getElementById("display").innerHTML = ev;
  document.getElementById("output").innerHTML = collectInput;
  //document.getElementById("display").innerHTML = ev;
}

// add event listener to button
var numb = document.getElementById("box");
numb.addEventListener("click", addEL, false);
=======
function modifyText (e) {
     if(e.target !== e.currentTarget){
     console.log(e.target.value);
     }
e.stopPropagation ();
}
// add event listener to button
var numb = document.getElementById("box");
numb.addEventListener("click", modifyText, false);
>>>>>>> bc405aafb2de6cbcb86cec032130a3c8e676846e

// TODO https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Legacy_Internet_Explorer_and_attachEvent
