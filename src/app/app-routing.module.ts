import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'google-maps-demo',
    loadChildren: () => import("./features/google-maps-demo/google-maps-demo.module").then(m => m.GoogleMapsDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
