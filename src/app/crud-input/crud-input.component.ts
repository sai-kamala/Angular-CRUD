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
@Output() data:EventEmitter<any> = new EventEmitter();
@Output() radioCheck:EventEmitter<any>= new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  addRow(){
    if(this.inputItem !== null) 
    this.inputItem['id']=UUID.UUID();
    this.data.emit(this.inputItem);   
    this.inputItem = {};
  }
  onRadioChange(e){ 
    let checkValue = e.target.value;
    this.radioCheck.emit(checkValue);
  }
}
