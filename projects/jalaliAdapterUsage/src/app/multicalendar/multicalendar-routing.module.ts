import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GregComponent } from './greg/greg.component';
import { JalaliComponent } from './jalali/jalali.component';

const routes: Routes = [
  { path: 'greg', component: GregComponent },
  { path: 'jalali', component: JalaliComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MulticalendarRoutingModule { }
