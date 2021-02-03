import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoComponent } from './grafico/grafico.component';
import { RelazioneComponent } from './relazione/relazione.component';

const routes: Routes = [
  { path: 'search', component: RelazioneComponent },
  { path: 'items/:id', component: GraficoComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
