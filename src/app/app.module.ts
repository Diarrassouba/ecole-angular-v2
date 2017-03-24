import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {AlertModule, DatepickerModule} from "ng2-bootstrap";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {ButtonModule} from "primeng/components/button/button";
import {DialogModule} from "primeng/components/dialog/dialog";
import {MaterialModule} from "@angular/material";

import {PersonneService} from "./services/personne.service";

import {PersonneComponent} from "./personne/personne.component";
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {AdministrateurComponent} from "./administrateur/administrateur.component";
import {EnseignantComponent} from "./enseignant/enseignant.component";
import {AccueilComponent} from "./accueil/accueil.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    EtudiantComponent,
    AdministrateurComponent,
    EnseignantComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule,DatepickerModule,
    DataTableModule,InputTextModule,ButtonModule,DialogModule,
    MaterialModule
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
