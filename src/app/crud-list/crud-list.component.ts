import { Component, OnInit, Input } from '@angular/core';
import {CRUDOperationsComponent} from '../crud-operations/crud-operations.component'

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CRUDListComponent implements OnInit {
  @Input() total_list:any =[];
  checkVal:Boolean = false;
  constructor() { }
  ngOnInit() {
  }
  deleteRow(index){
    this.total_list[index].removeAt(index);
  }
  checkStrike(e){
    if(e.target.checked)
    this.checkVal= true;
   
  }
}
