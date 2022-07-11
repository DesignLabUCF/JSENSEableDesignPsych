//<![CDATA[

var canvas = new fabric.Canvas('canvas', { selection: false });
canvas.setBackgroundImage('https://raw.githubusercontent.com/DesignLabUCF/JSENSEableDesignPsych/main/imgs/examples/cat1.png', canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});


var rect, isDown, origX, origY;

canvas.on('mouse:down', function(o){
    isDown = true;
    var pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    var pointer = canvas.getPointer(o.e);
    rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x-origX,
        height: pointer.y-origY,
        angle: 0,
        stroke: 'blue',
        strokeWidth: 2,
        fill: 'rgba(0,191,255,0.3)',
        transparentCorners: false
    });
    canvas.add(rect);
});

canvas.on('mouse:move', function(o){
    if (!isDown) return;
    var pointer = canvas.getPointer(o.e);
    
    if(origX>pointer.x){
        rect.set({ left: Math.abs(pointer.x) });
    }
    if(origY>pointer.y){
        rect.set({ top: Math.abs(pointer.y) });
    }
    
    rect.set({ width: Math.abs(origX - pointer.x) });
    rect.set({ height: Math.abs(origY - pointer.y) });
    
    
    canvas.renderAll();
});

canvas.on('mouse:up', function(o){
  isDown = false;
});


//Print Functionality
var shapes = new Array();;
var cornerbutton = document.getElementById('getCorners');
cornerbutton.addEventListener('click', getCorners, false);

function getCorners() {
  var obj = canvas.getObjects();
  for(var i = 0; i < obj.length; i++){
    shapes.push (obj[i].left)
    shapes.push (obj[i].width)
    shapes.push (obj[i].top)
    shapes.push (obj[i].height)
  }
  console.info(shapes.join());
  console.log(typeof shapes);
}

//Delete Functionality
var rectDeleteAll = document.getElementById('deleteallbutton');
rectDeleteAll.addEventListener('click', deleteall, false);

var rectDeleteLast = document.getElementById('deletelastbutton');
rectDeleteLast.addEventListener('click', deletelast, false);

function deleteall() {
  var obj = canvas.getObjects();
  for(var i = 0; i < obj.length; i++){
        canvas.remove(obj[i]);        
    }  
  canvas.requestRenderAll();
}

function deletelast() {
  var obj = canvas.getObjects();
  canvas.remove(obj[obj.length-1]);
  canvas.requestRenderAll();
}

// Download
var imageSaver = document.getElementById('downloadbutton');
imageSaver.addEventListener('click', saveImage, false);

function saveImage() {
  var canvas = document.getElementById('canvas');
  
  var link = document.createElement("a");
    link.download = 'canvas.png';
    link.href = canvas.toDataURL("image/png");
  
    document.body.appendChild(link);
    link.click();

  document.body.removeChild(link);
    delete link;
}

  //]]>