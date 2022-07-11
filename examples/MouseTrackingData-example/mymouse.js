//<![CDATA[


//initialize arrays
var canvas
var ctx
var delayedXPos = new Array();
var delayedYPos = new Array();
var delayedTime = new Array();

var xPos = new Array();
var yPos = new Array();

//initialize time variables
var initTime = new Date().getTime();
var timer_is_on=0;
var t;

//Get the Canvas variables once
var canvasleftbuffer;
var canvastopbuffer;
var canvasheight;
var canvaswidth;

var layerXPos = new Array();
var offsetXPos = new Array();
var pageXPos = new Array();
var screenXPos = new Array();
var absolutePointerXPos = new Array();
var layerYPos = new Array();
var offsetYPos = new Array();
var pageYPos = new Array();
var screenYPos = new Array();
var absolutePointerYPos = new Array();
var eventTimeStamp = new Array();
var timeStamp = new Array();

//time interval for data collection in ms
var dt=10;

//flag signaling whether getMousePosition has been called
mp_called = 0;


function InitThis() {
    canvas = new fabric.Canvas('canvas', { selection: false });
    fabric.Object.NUM_FRACTION_DIGITS =6;
    canvas.setBackgroundImage('https://raw.githubusercontent.com/DesignLabUCF/JSENSEableDesignPsych/main/imgs/examples/cat1.png', canvas.renderAll.bind(canvas), {crossOrigin: 'anonymous'});
    ctx = document.getElementById('canvas').getContext("2d");
    observe('mouse:move');
    observe('mouse:down');
    console.log("position:", canvas, canvas.height, canvas.width);

    //Output data about the current canvas.
    canvasleftbuffer = canvas._offset.left; //border
    canvastopbuffer = canvas._offset.top;
    canvasheight = canvas.height;
    canvaswidth = canvas.width;
    console.log(canvas.height)
}

 function observe(eventName, nonobserving) {
        canvas.on('mouse:move', function(opt){ log(eventName, opt) });
        canvas.on('mouse:down', function(opt){ printlog(eventName, opt) });
  }

function printlog(message, opt, color)
{
 for(var i = 0; i < absolutePointerYPos.length; i++){
      console.info(absolutePointerYPos[i]);
  }

}


 function log(message, opt, color)
 {
    timeStamp.push(GetTime());
    layerXPos.push(opt.e.layerX);
    offsetXPos.push(opt.e.offsetX);
    pageXPos.push(opt.e.pageX);
    screenXPos.push(opt.e.screenX);
    absolutePointerXPos.push(opt.absolutePointer.x);
    layerYPos.push(opt.e.layerY);
    offsetYPos.push(opt.e.offsetY);
    pageYPos.push(opt.e.pageY);
    screenYPos.push(opt.e.screenY);
    absolutePointerYPos.push(opt.absolutePointer.y);
    eventTimeStamp.push(opt.e.timeStamp);

    console.log("pageX: ",event.pageX, 
    "pageY: ", event.pageY, 
    "time: ", GetTime(), opt.absolutePointer.x)
 }



//function getMouse(options) {
//    p = canvas.getPointer(options.e);
//    document.getElementById('mouse').value = '' + p.x.toFixed() + ', ' + p.y.toFixed(0);
//}


function GetTime(){
    let nw = new Date(),
        nH = nw.getHours(),
        nM = nw.getMinutes(),
        nS = nw.getSeconds();
        nmS = nw.getMilliseconds();
    let time = nH + ':' + nM + ':' + nS + ':'+ nmS
    return time
}






  //]]>