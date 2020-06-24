var myProgress = 0;
var spriteLoop = setInterval(function(){
  if(myProgress < 0.9) myProgress += 0.01;
  else myProgress = 0;
  document.querySelector('a-image').setAttribute('sprite-sheet', 'cols: 10; rows: 9; progress: ' + myProgress);
}, 33);
