import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent {


  asideElements:any[]=[
    {
      title: 'about',
      description:
      `
        I'm a web developer in course. I'm searching for a workplace where I can prove all the things I've been learning this year.


        I'm a Post-Rock and Lomo Saltado lover.
      `
    },
    {
      title: 'skills',
      description:
      `
      Technical: JavaScript, ReactJS, Node JS, CSS, HTML5, Git-GitHub, Figma,
      Tailwind, Vite, Angular

      Soft-skills: Resilience, Empathy, Teamwork
      `
    },
    {
      title: 'languages',
      description:
      `
        English - advanced B2
        Italian - basic level
        French - basic level
      `
  }
  ]
}

