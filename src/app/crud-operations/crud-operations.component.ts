import { Component, OnInit } from '@angular/core';

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
    this.filteredList = this.itemList;
  }
  getCheckValue(markObj){
    for(let i=0;i<this.itemList.length;i++){
      if(this.itemList[i].id === markObj.id) {
      this.itemList[i].check = markObj.check;
      this.filteredList = this.itemList;
      }
      // else{
      //   if(!this.itemList[i].check){  
      //   this.itemList[i].check = false;
      //   this.filteredList = this.itemList;
      //   }
      // }
    }
  }
  deleteitem(id){
    this.itemList=this.itemList.filter(function(value){
    return id != value.id;
    });
    this.filteredList = this.itemList;
  }
  doCheckFilter(radioCheck){
    var striked_list=[];
    if(radioCheck == "ch1"){
      for(let i=0; i<this.filteredList.length;i++){   
      if(this.filteredList[i].check == true)
      striked_list.push(this.filteredList[i]);
      }
      this.itemList = striked_list;
    }
    if(radioCheck == "ch2"){
      var unstriked_list=[];
      for(let i=0; i<this.filteredList.length;i++){   
        if(this.filteredList[i].check == undefined)
        unstriked_list.push(this.filteredList[i]);
        }  
        this.itemList = unstriked_list;
    }
    if(radioCheck == "none")
    this.itemList = this.filteredList;
  }
  doSave(savedItem){
    for(let i=0; i<this.filteredList.length;i++){   
      if(this.filteredList[i].id == savedItem.id)
      this.filteredList[i]=savedItem;
    }
    this.itemList = this.filteredList;
  }
}