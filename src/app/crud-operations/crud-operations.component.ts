import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CRUDOperationsComponent implements OnInit {
itemList:any=[];
  constructor() { }

  ngOnInit() {
  }
  getData(item:any){
    this.itemList.push(item);
  }
}
