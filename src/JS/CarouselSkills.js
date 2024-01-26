var $panel = $('#panel-inner');
var maxY = 20,
    maxX = 20,
    maxZ = 2;


$panel.mousemove( function(e){
  var $this = $(this);
  e.stopImmediatePropagation();
  var offsetY = (e.target!=e.deletageTarget)? e.offsetY+e.target.offsetTop:e.offsetY;
  var offsetX = (e.target!=e.deletageTarget)? e.offsetX+e.target.offsetLeft:e.offsetX;
  var w = $panel.outerWidth(), h = $panel.outerHeight();
  var transform = { y: 1-offsetX/w*2, x: 0-(1-offsetY/h*2) };
  transform.z = 0-(transform.x * transform.y);
  
  var transformCSS = { 
    x: calculateValue(maxX, transform.x),
    y: calculateValue(maxY, transform.y), 
    z: calculateValue(maxZ, transform.z) };
  
  $this.css({
    transform:
    'rotateY('+transformCSS.y+'deg) rotateX('+transformCSS.x+'deg) rotateZ('+transformCSS.z+'deg)'
  });
});

$panel.mouseleave(function () {
    this.css({
      transform: 'rotateY(0deg) rotateX(0deg) rotateZ(0deg)',
      transition: 'all .15s ease-out'
    });
  });
  
  function calculateValue(max, value) {
    return max * value;
  }
  