import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  experienceElements:any[]=[
    {
      title:'Frontend Developer',
      duration:'Project CMYK - Evening - April 2021 - May 2021',
      description:
      `
        It has been made the layout of the details of the destination travels
        using Figma. That was about the description of the places which will be
        visited, the start point, the end point, the duration of the travel and
        it's cost. Besides, I worked on linking the JSON file with the details
        section giving it interactivity like refreshing the page every time a
        user select a destination. This feature gave to the user a complete
        interaction with the interface switching between all of the possible
        different destinations.
      `,
    },
    {
      title:'Geometric Design of Roads',
      duration:'Engineering Consultancy Wisore - July 2019 - December 2019',
      description:
      `
        It has be done the geometric design of the road Chota - Paccha in
        Cajamarca, Perú. Civil 3D was the main program to work on this project
        besides a group of other engineers who support the main goal and
        contributed in other fields like PACRI.
      `
      ,
    },
    {
      title:'',
      duration:'',
      description:'',
    }
  ]
}
