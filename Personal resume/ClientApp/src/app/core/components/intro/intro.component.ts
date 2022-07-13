import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private sharedService: SharedService) { }

  isHandset() {
    return this.sharedService.business.isHandset();
  }

  getParticleOptions() {
    return {
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: ClickMode.push
          },
          onHover: {
            enable: true,
            mode: HoverMode.bubble
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            lineLinked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 83.91608391608392,
            size: 1,
            duration: 3,
            opacity: 1,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      particles: {
        collisions: {
          enable: true
        },
        color: {
          value: "#ffffff"
        },
        links: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outMode: OutMode.out,
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        number: {
          value: 355,
          density: {
            enable: true,
            valueArea: 789.1476416322727
          }
        },
        opacity: {
          value: 0.48927153781200905,
          random: false,
          anim: {
            enable: true,
            speed: 0.6,
            opacityMin: 0,
            sync: false
          }
        },
        shape: {
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          },
          polygon: {
            nbSides: 5
          },
          stroke: {
            width: 0,
            color: "#000000"
          },
          type: "circle"
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            sizeMin: 0,
            sync: false
          }
        }
      },
      detectRetina: true
    };
  }

  particlesLoaded(_container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  ngOnInit(): void {
    let script = this.renderer2.createElement('script') as HTMLScriptElement;
    script.src = './assets/js/plugins/water-ripple.min.js';

    this.renderer2.appendChild(this.document.body, script);

    script.onload = () => {
      const w = (window as any);

      const raindrop = w.create2DArray(w.createRadialCanvas(4, 4));
      const pixel = w.create2DArray(w.createRadialCanvas(2, 2));
      const finger = w.create2DArray(w.createRadialCanvas(14, 14));

      const width = 400;
      const height = 300;

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
        backgroundImageUrl: './assets/images/.png/logo.png',
        lightRefraction: 9.0,
        lightReflection: 0.1,
        showStats: false
      });


      // Init some utils
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
          // mozPressure: https://developer.mozilla.org/en/DOM/Event/UIEvent/MouseEvent
          waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
        }, false);
      }
    }
  }
}
