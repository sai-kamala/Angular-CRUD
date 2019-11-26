import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CRUDOperationsComponent implements OnInit {
itemList:any=[];
item:any={};
  constructor() { }

  ngOnInit() {
  }
  getData(e){
    this.item=e;
    if(this.item !== null)
    this.itemList.push(this.item);
  }
  getCheckValue(markObj){
    for(let i=0;i<this.itemList.length;i++){
      if(this.itemList[i].id === markObj.id)  
      this.itemList[i].check = markObj.checkVal;
      }
  }
  deleteitem(id){
    this.itemList=this.itemList.filter(function(value){
    return id != value.id;
    });
  }
}
