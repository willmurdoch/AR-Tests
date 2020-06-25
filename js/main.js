// var myProgress = 0;
// var spriteLoop = setInterval(function(){
//   if(myProgress < 0.9) myProgress += 0.01;
//   else myProgress = 0;
//   document.querySelector('a-image').setAttribute('sprite-sheet', 'cols: 10; rows: 9; progress: ' + myProgress);
// }, 33);


window.onload = function() {
  AFRAME.registerComponent('videohandler', {
    init: function () {
      var marker = this.el;
      this.vid = document.querySelector("#phil");

      marker.addEventListener('markerFound', function () {
        this.vid.play();
      }.bind(this));

      marker.addEventListener('markerLost', function() {
        this.vid.pause();
        this.vid.currentTime = 0;
      }.bind(this));
    }
  });
};
