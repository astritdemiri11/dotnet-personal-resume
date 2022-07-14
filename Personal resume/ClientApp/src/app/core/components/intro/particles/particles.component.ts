import { Component, Renderer2 } from '@angular/core';
import { loadFull } from 'tsparticles';
import { ClickMode, Container, EasingType, Engine, HoverMode, MoveDirection, OutMode, ParticlesOptions } from 'tsparticles-engine';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.attract
        },
        resize: true
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: EasingType.easeOutQuad,
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        push: {
          particles_nb: 4
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

  constructor(private renderer2: Renderer2) {}

  particlesLoaded(container: Container): void {
    if(container.canvas.element) {
      this.renderer2.setStyle(container.canvas.element, 'position', 'relative');
    }
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
