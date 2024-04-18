import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  panelOpenState = false;
  template: TemplateRef<any>;
  @ViewChild('templateOne', {static : true}) defaultTemplate : TemplateRef<any>;

  showRef(template: TemplateRef<any>) {
    console.log(template)
    this.template = template;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
