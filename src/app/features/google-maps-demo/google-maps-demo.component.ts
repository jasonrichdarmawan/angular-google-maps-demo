import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, catchError, firstValueFrom, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { LoadGoogleMapsAPIService } from 'src/app/core/services/google-maps/load-google-maps-api.service';

@Component({
  selector: 'app-google-maps-demo',
  templateUrl: './google-maps-demo.component.html',
  styleUrls: ['./google-maps-demo.component.scss']
})
export class GoogleMapsDemoComponent implements OnInit {
  @ViewChild("autocomplete") autocompleteRef!: ElementRef;

  center: google.maps.LatLngLiteral = {lat: 1.290270, lng: 103.851959}

  constructor(public googleMapsLoader: LoadGoogleMapsAPIService) {
    if (this.googleMapsLoader.apiLoaded) {
      const isLoaded = firstValueFrom(this.googleMapsLoader.apiLoaded);

      isLoaded.then((isLoaded) => {
        if (!isLoaded) { return }

        // set <google-maps [center]> to current position
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = { lat: position.coords.latitude, lng: position.coords.longitude }
        })

        // set center when user select a place in <input #autocomplete />
        // TODO: permitting direct access to the DOM can make your application more vulnerable to XSS attacks.
        // reference: https://angular.io/api/core/ElementRef
        const autocomplete = new google.maps.places.Autocomplete(this.autocompleteRef.nativeElement, {})
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.geometry?.location) {
            this.center = place.geometry.location.toJSON();
          }
        })

      })
    }
  }

  ngOnInit(): void {
  }

}
