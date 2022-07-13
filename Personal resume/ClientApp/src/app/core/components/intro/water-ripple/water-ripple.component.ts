import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-water-ripple',
  templateUrl: './water-ripple.component.html',
  styleUrls: ['./water-ripple.component.scss']
})
export class WaterRippleComponent implements OnInit {

  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let script = this.renderer2.createElement('script') as HTMLScriptElement;
    script.src = './assets/js/plugins/water-ripple.min.js';

    this.renderer2.appendChild(this.document.body, script);

    script.onload = () => {
      const w = (window as any);

      const pixel = w.create2DArray(w.createRadialCanvas(2, 2));
      const finger = w.create2DArray(w.createRadialCanvas(14, 14));

      const width = 700;
      const height = 850;

      var waterModel = new w.WaterModel(width, height, {
        resolution: 2.0,
        interpolate: false,
        damping: 0.985,
        clipping: 5,
        evolveThreshold: 0.05,
        maxFps: 50,
        showStats: false
      });
      var waterCanvas = new w.WaterCanvas(width, height, "waterHolder", waterModel, {
        backgroundImageUrl: './assets/images/.jpg/me.jpg',
        lightRefraction: 9.0,
        lightReflection: 0.1,
        showStats: false
      });

      // const raindrop = w.create2DArray(w.createRadialCanvas(4, 4));
      // var rainMaker = new w.RainMaker(width, height, waterModel, raindrop);
      // rainMaker.setRaindropsPerSecond(1);

      const canvasHolder = document.getElementById("waterHolder");

      if (canvasHolder) {
        var mouseDown = false;
        canvasHolder.addEventListener("mousedown", function (e) {
          mouseDown = true;
          var x = (e.clientX - canvasHolder.offsetLeft) + document.body.scrollLeft + document.documentElement.scrollLeft;
          var y = (e.clientY - canvasHolder.offsetTop) + document.body.scrollTop + document.documentElement.scrollTop;
          waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
        }, false);

        canvasHolder.addEventListener("mouseup", function (e) {
          mouseDown = false;
        }, false);

        canvasHolder.addEventListener("mousemove", function (e) {
          var x = (e.clientX - canvasHolder.offsetLeft) + document.body.scrollLeft + document.documentElement.scrollLeft;
          var y = (e.clientY - canvasHolder.offsetTop) + document.body.scrollTop + document.documentElement.scrollTop;
          waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
        }, false);
      }
    }
  }

}
