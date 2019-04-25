import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-to-do-list',
  templateUrl: './personal-to-do-list.component.html',
  styleUrls: ['./personal-to-do-list.component.css']
})
export class PersonalToDoListComponent implements OnInit {
 @Input() title = ''
 @Input() tasks = []
  creator = 'Wan Jun'
  nightMode = false
  redMode = false

  
  onClickItem(index) {
    let selectedItem = this.tasks[index]
    selectedItem.completed = !selectedItem.completed
  }

  onClickButton(){
    this.nightMode = !this.nightMode
  }

  onClickRed(){
    this.redMode = !this.redMode
  }

  onHoverItem(index){
    let hoveredItem = this.tasks[index]
    hoveredItem.hovered = !hoveredItem.hovered
  }

  onClickClear(){
    this.tasks = []
  }

  ngOnInit() {}
}
