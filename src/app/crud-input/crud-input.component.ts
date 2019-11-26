import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-crud-input',
  templateUrl: './crud-input.component.html',
  styleUrls: ['./crud-input.component.scss']
})
export class CRUDInputComponent implements OnInit {
// item:any;
inputItem:object = {input:''};
addedVal:any;
@Output() data:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addRow(){
    // this.inputItem = {input:this.item};
    this.addedVal = this.inputItem;
    this.inputItem['id']=UUID.UUID();
    if(this.addedVal !== null)
      this.data.emit(this.addedVal);    
    this.inputItem = {};
  }
}
