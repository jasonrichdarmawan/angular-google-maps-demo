import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsDemoComponent } from './google-maps-demo.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { LoadGoogleMapsAPIService } from 'src/app/core/services/google-maps/load-google-maps-api.service';
import { GoogleMapsDemoRoutingModule } from './google-maps-demo-routing.module';



@NgModule({
  declarations: [
    GoogleMapsDemoComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsDemoRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    LoadGoogleMapsAPIService
  ],
})
export class GoogleMapsDemoModule { }
