import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsDemoComponent } from './google-maps-demo.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleMapsDemoRoutingModule { }
