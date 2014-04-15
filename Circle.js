colorPalette = ['#e5f57b', '#83904e', '#414411', '#29240a', '#702c07', '#ab5d50','#ccbbab','#a9bdc9','#0b5866','#f0a694'];
function getRandomColor() {
	// var letters = '0123456789ABCDEF'.split('');
	// var color = '#';
	// for (var i = 0; i < 6; i++ ) {
		// color += letters[Math.round(Math.random() * 15)];
	// }
	var color = colorPalette[Math.floor(Math.random()*colorPalette.length)];
	return color;
}
	  
function Circle (value, canvasWidth) {
  this.value = value;
  this.canvasWidth = canvasWidth;
  this.initialize();
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.lineWidth = 0;
  this.visible = true;
  this.index = -1;
}

Circle.prototype.initialize = function(){
  this.radius = Math.ceil(Math.random() * 20) + 20;
  this.color = getRandomColor();
  this.strokeColor = getRandomColor();
  this.x = Math.floor(Math.random() * (this.canvasWidth - 2*this.radius)) + this.radius;
  this.y = -this.radius;
  this.vy = Math.floor(Math.random() * 3) + 1;
  this.onScreen = false;
}

Circle.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
    context.strokeStyle = this.strokeColor;
    context.stroke();
  }
  context.font = "bold 24px Arial";
  context.fillStyle = "white";
  context.fillText(this.value, -7, 5);
  context.restore();
};
