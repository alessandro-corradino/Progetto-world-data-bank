import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';
import { GraficoComponent } from './grafico/grafico.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'relazione', component: RelazioneComponent },
  { path: 'grafico', component: GraficoComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
