import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {
  private map: any;
  private centroid: any;
  private icon: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
  }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Dynamically import Leaflet only if in browser environment
      const L = await import('leaflet');
      this.centroid = [49.827589532104774, 23.991570501440744];
      this.icon = L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
      });
      this.initMap(L);
    }
  }

  private initMap(L: any): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 17
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.marker(this.centroid, {icon: this.icon}).addTo(this.map);
  }
}
