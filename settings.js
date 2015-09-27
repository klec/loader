/**
 * Created by klec on 9/23/15.
 */

function apply(){
    var size = document.getElementById("size").value;
    loader.options.radius = size;
    var width = document.getElementById("width").value/10;
    var loaders = document.getElementsByClassName("loader");
    for (var l = 0; l < loaders.length; l++) {
        loaders[l].setAttribute("width", size*5);
        loaders[l].setAttribute("height", size*5);
        for (var i = 0; i<loaders[l].childNodes.length; i++) {
            if (loaders[l].childNodes[i].tagName == "circle") {
                if (loaders[l].childNodes[i].id.substr(0,8) == "loaderbg") {
                    loaders[l].childNodes[i].setAttribute("r", size * 2);
                } else {
                    loaders[l].childNodes[i].setAttribute("r", size / 10 * width);
                }
            }
        }
    }
}