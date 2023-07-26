import { Component } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  public dataWorks=[
    {
      title: "Hola",
      descripcion:"Prueba 1",
      position:"one"
    },
    {
      title: "Hola",
      descripcion:"Prueba 2",
      position:"two"
    },
    // {
    //   title: "Hola",
    //   descripcion:"Prueba 3"
    // },
    // {
    //   title: "Hola",
    //   descripcion:"Prueba 4"
    // }

  ]

}
