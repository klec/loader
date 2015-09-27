/**
 * Created by klec on 9/21/15.
 */


Loader = function (opt) {
    this.options = {};
    this.options.length = opt.length || 30;
    this.options.t = 10;
    this.options.pointSize = opt.width || 2;
    this.options.radius = opt.size || 10;

    this.init();
}


Loader.prototype = {

    reDraw: function () {
        this.options.t--;
        var loaders = document.getElementsByClassName("loader");
        for (var l = 0; l < loaders.length; l++) {
            for (var i = 0; i < this.options.length; i++) {
                this.moveCircle(document.getElementById("circle" + l + i), this.options.t + i);
            }
        }
    },

    moveCircle: function (circle, t) {
        circle.setAttribute("cx", this.options.radius * 2.5 + Math.sin(t * Math.PI / 16) * this.options.radius);
        circle.setAttribute("cy", this.options.radius * 2.5 + Math.cos((t * 1.05) * Math.PI / 16) * this.options.radius);
    },

    createCircle: function (alfa, radius, id) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("fill", "rgb(" + alfa + ", " + alfa + ", " + alfa + ")");
        circle.setAttribute("r", radius);
        circle.setAttribute("id", id);//filter="url(#f1)"
        circle.setAttribute("filter", "url(#blur1)");
        return circle;
    },

    init: function () {

        var loaders = document.getElementsByClassName("loader");
        for (var l = 0; l < loaders.length; l++) {
            var bgcircle = this.createCircle(0, this.options.radius * 2, "loaderbg");
            bgcircle.setAttribute("cx", "50%");
            bgcircle.setAttribute("cy", "50%");
            loaders[l].setAttribute("width", this.options.radius * 5);
            loaders[l].setAttribute("height", this.options.radius * 5);
            loaders[l].appendChild(bgcircle);
            for (var i = 0; i < this.options.length; i++) {
                var alfa = Math.round(Math.sin((i - 4) / 2.4) * 120 + 120);
                var id = "circle" + l + i;
                var size = this.options.radius / 10 * this.options.pointSize;
                circle = this.createCircle(alfa, size, id);  // var or not var
                loaders[l].appendChild(circle);
            }
        }
        this.interval = setInterval(this.reDraw.bind(this), 40);
    }
}



