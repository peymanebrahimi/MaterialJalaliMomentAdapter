import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jsonDate = "2018-10-15T20:21:29.4674496";
  dateControl = new UntypedFormControl(this.jsonDate);
  
  constructor() { }

  ngOnInit(): void {
  }

}
