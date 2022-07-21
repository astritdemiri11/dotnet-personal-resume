import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ClickMode, EasingType, HoverMode, MoveDirection, OutMode } from 'tsparticles-engine';

import { Me } from '../../models/me/me.model';
import { SocialMediaItem } from '../../models/social-media/social-media-item.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  me: Me;
  socialMedia: SocialMediaItem[];
  particleOptions: any;

  constructor(private sharedService: SharedService) {
    this.me = {
      name: 'Astrit',
      surname: 'Demiri',
      profession: 'Web Developer',
      description: `I would describe myself as someone who is honest, caring, intelligent, motivated, hardworking, and ambitious.
      I am an easy going person & don’t get easily disturbed by downs in my life. I like to help people to find solutions to their problems.
      I also enjoy working out, traveling, watching movies, going out for dinner, and having great intellectual conversations!`,
      personal: [
        { key: 'Birthday', value: 'June 11, 1994' },
        { key: 'Phone', value: '+355 69-640-2822' },
        { key: 'Email', value: 'astritdemiri11@gmail.com' },
        { key: 'Address', value: 'Tirane 1001, Albania' },
        { key: 'Language', value: 'English, Italian, Turkish' },
        { key: 'Freelance', value: 'Available' }
      ]
    }

    this.socialMedia = [
      { title: 'LinkedIn', icon: 'social-media:linkedin', url: '' },
      { title: 'Github', icon: 'social-media:github', url: '' },
      { title: 'Skype', icon: 'social-media:skype', url: '' },
      { title: 'Instagram', icon: 'social-media:instagram', url: '' },
      { title: 'Facebook', icon: 'social-media:facebook', url: '' },
      { title: 'Twitter', icon: 'social-media:twitter', url: '' },
    ]

    this.particleOptions = {
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
  }

  isHandset() {
    return this.sharedService.business.isHandset();
  }
}
