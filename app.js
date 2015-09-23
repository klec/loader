/**
 * Created by klec on 9/21/15.
 */
var length = 30;
var t=10;
var pointSize = 1;
var radius = 10;

function reDraw(){
    t--;
    for(var i=0; i<length; i++){
        moveCircle(document.getElementById("circle"+i), t+i);
    }
}

function moveCircle(circle, t){
    circle.setAttribute("cx", 25+Math.sin(t*Math.PI/16)*radius);
    circle.setAttribute("cy", 25+Math.cos((t*1.05)*Math.PI/16)*radius);
}

function init(){
    var box = document.getElementById("loader");
    var circle ;
    var alfa;
    for (var i=0; i<length; i++) {
        circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        alfa = Math.round(Math.sin((i-5)/2.4)*100+100);
        //r = Math.round(Math.sin((i-5)/2.4)*100+100);
        //g = Math.round(Math.sin((i)/2.4)*100+100);
        //b = Math.round(Math.sin((i+5)/2.4)*100+100);
        //circle.setAttribute("fill", "rgb("+r+", "+g+", "+b+")");
        circle.setAttribute("fill", "rgb("+alfa+", "+alfa+", "+alfa+")");
        circle.setAttribute("r", pointSize);
        circle.setAttribute("id", "circle"+i);
        box.appendChild(circle);
    }
}

init();
setInterval(reDraw, 40);