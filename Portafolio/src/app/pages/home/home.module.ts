import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import { HeaderComponent } from 'src/app/components/header/header.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { WorksModule } from '../works/works.module';
import { ContactModule } from '../contact/contact.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    WorksModule,
    ContactModule
   
  ]
})
export class HomeModule { }
