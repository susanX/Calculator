function modifyText (e) {
     if(e.target !== e.currentTarget){
     console.log(e.target.value);
     }
e.stopPropagation ();
}
// add event listener to button
var numb = document.getElementById("box");
numb.addEventListener("click", modifyText, false);

// TODO https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Legacy_Internet_Explorer_and_attachEvent
