import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit,AfterViewInit {
  private map: any;
  private centroid: L.LatLngExpression = [49.827589532104774, 23.991570501440744];
  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  };

  private initMap(): void {

    this.map = L.map('map', {
      center: this.centroid,
      zoom: 17
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    const marker = L.marker([49.827589532104774, 23.991570501440744], this.icon).addTo(this.map);
  }
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initMap();

  }
}
