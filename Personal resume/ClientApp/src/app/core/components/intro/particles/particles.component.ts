import { Component, Input, Renderer2 } from '@angular/core';
import { loadFull } from 'tsparticles';
import { Container, Engine, ParticlesOptions } from 'tsparticles-engine';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  @Input() options?: ParticlesOptions;

  constructor(private renderer2: Renderer2) {}

  particlesLoaded(container: Container): void {
    if(container.canvas.element) {
      this.renderer2.setStyle(container.canvas.element, 'position', 'relative');
    }
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  ngOnInit() {
    if (this.options == null) {
      throw new Error('app-particles, [options] attribute is required');
    }
  }
}
