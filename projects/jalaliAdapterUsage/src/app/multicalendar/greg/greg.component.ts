import { Component, OnInit } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-greg',
  templateUrl: './greg.component.html',
  styleUrls: ['./greg.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "en-GB" },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter ,
      deps: [MAT_DATE_LOCALE,MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }
  ]
})
export class GregComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
