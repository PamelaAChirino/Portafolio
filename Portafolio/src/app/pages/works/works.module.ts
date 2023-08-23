import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';
import { WorkCardComponent } from './components/work-card/work-card.component';
import { WorkDrawerComponent } from './components/work-drawer/work-drawer.component';



@NgModule({
  declarations: [
    WorksComponent,
    WorkCardComponent,
    WorkDrawerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WorksComponent

  ]
})
export class WorksModule { }
