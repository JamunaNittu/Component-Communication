import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() name:string;
  @Output() public ChildEvent =new EventEmitter();
  constructor() { }
  FireEvent(){
    this.ChildEvent.emit('Hey I am Child');
  }
  ngOnInit() {
  }

}
