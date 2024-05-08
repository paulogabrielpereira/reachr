import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeViewComponent } from './components/entities/welcome-view/welcome-view.component';
import { CargoViewComponent } from './components/entities/cargo-view/cargo-view.component';
import { EmpresaViewComponent } from './components/entities/empresa-view/empresa-view.component';
import { GestorViewComponent } from './components/entities/gestor-view/gestor-view.component';
import { VagaViewComponent } from './components/entities/vaga-view/vaga-view.component';

const routes: Routes = [
  {path: '', component: WelcomeViewComponent},
  {path: 'cargo', component: CargoViewComponent},
  {path: 'empresa', component: EmpresaViewComponent},
  {path: 'gestor', component: GestorViewComponent},
  {path: 'vaga', component: VagaViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
