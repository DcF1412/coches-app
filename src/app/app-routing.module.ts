import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CochesAlquilerComponent } from './coche-library/components/coches-alquiler/coches-alquiler.component';
import { CochesKm0Component } from './coche-library/components/coches-km0/coches-km0.component';
import { CochesNuevosComponent } from './coche-library/components/coches-nuevos/coches-nuevos.component';
import { CochesSegundaComponent } from './coche-library/components/coches-segunda/coches-segunda.component';
import { HomeComponent } from './coche-library/components/home/home.component';
import { LoginPageComponent } from './coche-library/components/login-page/login-page.component';
import { MotosComponent } from './coche-library/components/motos/motos.component';
import { VehiculosIndustrialesComponent } from './coche-library/components/vehiculos-industriales/vehiculos-industriales.component';
import { AuthGuard } from './coche-library/Guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coches-nuevos', component: CochesNuevosComponent},
  {path: 'coches-segunda', component: CochesSegundaComponent},
  {path: 'coches-km0', component: CochesKm0Component},
  {path: 'coches-alquiler', component: CochesAlquilerComponent},
  {path: 'motos', component: MotosComponent},
  {path: 'vehiculos-industriales', component: VehiculosIndustrialesComponent},
  {path: 'login', component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
