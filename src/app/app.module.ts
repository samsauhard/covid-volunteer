import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Material2Module } from './material.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpClientJsonpModule}     from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SeekhelpComponent } from './seekhelp/seekhelp.component';
import { HomeComponent_ } from './home_sau/home.component';
import { HeaderComponent } from './header/header.component';
import {AppService}           from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent_,
    HeaderComponent,
    SeekhelpComponent,
    VolunteerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material2Module,
    DirectivesModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
