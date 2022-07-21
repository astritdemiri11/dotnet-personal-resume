import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Required } from 'src/app/core/decorators/required/required.decorator';

@Component({
  selector: 'app-water-ripple',
  templateUrl: './water-ripple.component.html',
  styleUrls: ['./water-ripple.component.scss']
})
export class WaterRippleComponent implements OnInit {
  @Input() @Required('app-water-ripple') image?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let script = this.renderer2.createElement('script') as HTMLScriptElement;
    script.src = './assets/js/plugins/water-ripple.min.js';

    this.renderer2.appendChild(this.document.body, script);

    script.onload = () => {
      const w = (window as any);

      const pixel = w.create2DArray(w.createRadialCanvas(3, 3));
      const finger = w.create2DArray(w.createRadialCanvas(14, 14));

      const width = this.elementRef.nativeElement.clientWidth;
      const height = this.elementRef.nativeElement.clientHeight;

      console.log(width, height);

      let waterModel = new w.WaterModel(width, height, {
        resolution: 2.0,
        interpolate: false,
        damping: 0.985,
        clipping: 5,
        evolveThreshold: 0.05,
        maxFps: 50,
        showStats: false
      });

      new w.WaterCanvas(width, height, "waterHolder", waterModel, {
        backgroundImageUrl: this.image,
        lightRefraction: 9.0,
        lightReflection: 0.1,
        showStats: false
      });

      // const raindrop = w.create2DArray(w.createRadialCanvas(4, 4));
      // let rainMaker = new w.RainMaker(width, height, waterModel, raindrop);
      // rainMaker.setRaindropsPerSecond(1);

      const canvasHolder = document.getElementById("waterHolder");

      if (canvasHolder) {
        let mouseDown = false;

        canvasHolder.addEventListener("mousedown", (e) => {
          mouseDown = true;

          const rect = canvasHolder.getBoundingClientRect();

          const x = (e.clientX - rect.left) + document.body.scrollLeft + document.documentElement.scrollLeft;
          const y = (e.clientY - rect.top) + document.body.scrollTop + document.documentElement.scrollTop;

          waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
        }, false);

        canvasHolder.addEventListener("mouseup", (_e) => {
          mouseDown = false;
        }, false);

        canvasHolder.addEventListener("mousemove", (e) => {
          const rect = canvasHolder.getBoundingClientRect();

          const x = (e.clientX - rect.left) + document.body.scrollLeft + document.documentElement.scrollLeft;
          const y = (e.clientY - rect.top) + document.body.scrollTop + document.documentElement.scrollTop;

          console.log(x, y);

          waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
        }, false);
      }
    }
  }

}
