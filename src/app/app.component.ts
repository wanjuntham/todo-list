import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todolists = [{
    title: "list 1",
    tasks: [
      {
        label: 'Go To Work',
        completed: false,
        hovered: false,
      },
      {
        label: 'Buy Groceries',
        completed: false,
        hovered: false,
      },
      {
        label: 'Mark Assignments',
        completed: false,
        hovered: false,
      },
      {
        label: 'Go Home',
        completed: false,
        hovered: false,
      },

    
    ]

    
  },
  {
    title: "list 2",
    tasks: [
      {
        label: 'Go To Work',
        completed: false,
        hovered: false,
      },
      {
        label: 'Buy Groceries',
        completed: false,
        hovered: false,
      },
      {
        label: 'Mark Assignments',
        completed: false,
        hovered: false,
      },
      {
        label: 'Go Home',
        completed: false,
        hovered: false,
      },

    
    ]

    
  }]
}
