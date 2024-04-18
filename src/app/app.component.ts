import {Component} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ZahidAuditService';
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1400px)'])
      .pipe(delay(1))
      .subscribe((res) => {

      });
  }


}
