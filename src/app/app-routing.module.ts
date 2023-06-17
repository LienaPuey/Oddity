import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchComponent } from './components/launch/launch.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada, redirige a la página de inicio
{ path: 'home', component: HomeComponent },
{ path: 'launches', component: LaunchesComponent },
{ path: 'launch/:id', component: LaunchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
