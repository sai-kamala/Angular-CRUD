import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CRUDListComponent implements OnInit {
  @Input() total_list:any =[];
  @Output() markObj = new EventEmitter();
  @Output() deleteId = new EventEmitter();
  checkVal:Boolean = false;
  isEdit;
  saveVal;
  constructor() { }
  ngOnInit() {
  }
  deleteRow(i){
    // this.total_list.splice(list.i)

  //   this.total_list=this.total_list.filter(function(value){
  //     return i != value.id;
  // });
  
  this.deleteId.emit(i);
  }
  editRow(i){
    console.log(i);
    //var item=this.total_list.find(list => list.id == i);
    this.isEdit=i.id;
    
  }
  checkStrike(e,i){
    let outputObj={check:e.target.checked, id:i}
    this.markObj.emit(outputObj);
  }
  savedata(e){
    this.saveVal = e.target.value;
  }
  saveRow(i){
  let savedInput;
  i.input = this.saveVal;
  this.isEdit='';
  savedInput.emit(i);
  }
}
