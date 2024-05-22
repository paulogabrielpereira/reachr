import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { CargoViewComponent } from './components/entities/cargo-view/cargo-view.component';
import { EmpresaViewComponent } from './components/entities/empresa-view/empresa-view.component';
import { GestorViewComponent } from './components/entities/gestor-view/gestor-view.component';
import { VagaViewComponent } from './components/entities/vaga-view/vaga-view.component';
import { WelcomeViewComponent } from './components/entities/welcome-view/welcome-view.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    CargoViewComponent,
    EmpresaViewComponent,
    GestorViewComponent,
    VagaViewComponent,
    WelcomeViewComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
