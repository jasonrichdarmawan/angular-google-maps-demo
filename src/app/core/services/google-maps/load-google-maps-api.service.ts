import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoadGoogleMapsAPIService {

  /**
   * Usage in component.
   * 
    ```
    constructor(public googleMapsLoader: LoadGoogleMapsAPIService) {
      if (this.googleMapsLoader.apiLoaded) {
        const isLoaded = firstValueFrom(this.googleMapsLoader.apiLoaded);

        isLoaded.then((isLoaded) => {
          if (!isLoaded) { return }

          // do something
        })
      }
    }
    ```
   */
  apiLoaded?: Observable<boolean>;

  constructor(private httpClient: HttpClient) {
    this.load();
  }

  private load() {
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${environment.google.maps.key}`, 'callback')
        .pipe(
          map(() => {
            return true;
          }),
          catchError(() => {
            return of(false);
          }),
          shareReplay(1), // Cache the result for subsequent subscribers
        );
    }
  }
}
