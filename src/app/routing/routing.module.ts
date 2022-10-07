import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import { RouterModule, Routes } from '@angular/router'

const rotte:Routes=[
{
  path:"form/:id",component:FormComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotte)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
