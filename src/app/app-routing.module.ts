import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/vagas/editar/editar.component';

const routes: Routes = [
  {path : 'vagas/editar', component : EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
