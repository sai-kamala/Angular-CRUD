import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-crud-input',
  templateUrl: './crud-input.component.html',
  styleUrls: ['./crud-input.component.scss']
})
export class CRUDInputComponent implements OnInit {
// item:any;
inputItem:object = {input:''};
@Output() data:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addRow(){
    // this.inputItem = {input:this.item};
    if(this.inputItem !== null)
      this.data.emit(this.inputItem);    
    this.inputItem = {};
  }
}
