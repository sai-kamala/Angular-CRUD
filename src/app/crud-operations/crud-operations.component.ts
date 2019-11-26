import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CRUDOperationsComponent implements OnInit {
itemList:any=[];
filteredList=[];
item:any={};
  constructor() { }

  ngOnInit() {
  }
  getData(e){
    this.item=e;
    if(this.item !== null)
    this.itemList.push(this.item);
    this.filteredList.push(this.item);
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
  doCheckFilter(checkedObj){
    var striked_list=[];
    if(checkedObj.check1 == true){
      for(let i=0; i<this.filteredList.length;i++){   
      if(this.filteredList[i].check == true)
      striked_list.push(this.filteredList[i]);
      }
      this.itemList = striked_list;
    }
    else
      this.itemList = this.filteredList;
    // if(checkedObj.check2 == true){
    //   var unstriked_list=[];
    //   for(let i=0; i<this.filteredList.length;i++){   
    //     if(this.filteredList[i].check == false)
    //     unstriked_list.push(this.filteredList[i]);
    //     }  
    //     this.itemList = unstriked_list;
    // }
    // else
    //   this.itemList = this.filteredList;
  }
}
