import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JalaliMomentDateModule } from 'material-jalali-moment-adapter/src/lib/adaptor';
import { GregComponent } from './greg/greg.component';
import { JalaliComponent } from './jalali/jalali.component';
import { MulticalendarRoutingModule } from './multicalendar-routing.module';



@NgModule({
  declarations: [
    GregComponent,
    JalaliComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    JalaliMomentDateModule,
    MulticalendarRoutingModule
  ]
})
export class MulticalendarModule { }
