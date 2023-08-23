import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent {

  @Input() title: string="";
  @Input() descripcion: string="";
  @Input() position: string="";
  @Input() image: string="";
  


}
