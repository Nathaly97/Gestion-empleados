import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
@NgModule({
declarations: [
AppComponent,
EmpleadosComponent
],

imports: [
BrowserModule,
FormsModule,
AppRoutingModule,
HttpClientModule
],

providers: [ ],
bootstrap: [AppComponent]
})

export class AppModule { }

//Este código define el módulo principal de una aplicación Angular, conocido como AppModule. Es un archivo fundamental en Angular (app.module.ts) porque configura la estructura del proyecto.