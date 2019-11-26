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
checkedObj={};
@Output() data:EventEmitter<any> = new EventEmitter();
@Output() checkFilter:EventEmitter<any>= new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  addRow(){
    if(this.inputItem !== null) 
    this.inputItem['id']=UUID.UUID();
    this.data.emit(this.inputItem);   
    this.inputItem = {};
  }
  triggerCheck(e){
    let value;
    if(e.target.value == "ch1")
  var checked1 = e.target.checked;
  else
  var checked2 = e.target.checked;
  this.checkedObj={check1:checked1, check2:checked2}
  this.checkFilter.emit(this.checkedObj);
  }
}
