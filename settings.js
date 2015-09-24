/**
 * Created by klec on 9/23/15.
 */

function apply(){
    var size = document.getElementById("size").value;
    var width = document.getElementById("width").value/10;
    var loaders = document.getElementsByClassName("loader");
    for (var l = 0; l < loaders.length; l++) {
        for (var i = 0; i<loaders[l].childNodes.length; i++) {
            //console.log(loaders[l].childNodes[i].tagName);
            if(loaders[l].childNodes[i].tagName=="circle") {
                loaders[l].removeChild(loaders[l].childNodes[i]);
                i--;
            }
        }
    }
    clearInterval(window.loader.interval);
    window.loader = new Loader({size: size, width: width});
}