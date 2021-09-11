import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocheLibraryRoutingModule } from './coche-library-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { HomeComponent } from './components/home/home.component';
import { CochesNuevosComponent } from './components/coches-nuevos/coches-nuevos.component';
import { CochesSegundaComponent } from './components/coches-segunda/coches-segunda.component';
import { CochesKm0Component } from './components/coches-km0/coches-km0.component';
import { CochesAlquilerComponent } from './components/coches-alquiler/coches-alquiler.component';
import { MotosComponent } from './components/motos/motos.component';
import { VehiculosIndustrialesComponent } from './components/vehiculos-industriales/vehiculos-industriales.component';
import { PaginaMuestraComponent } from './components/pagina-muestra/pagina-muestra.component';
import { FiltrosComponent } from './components/pagina-muestra/filtros/filtros.component';
import { MostrarCochesComponent } from './components/pagina-muestra/mostrar-coches/mostrar-coches.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TopNavigationComponent,
    HomeComponent,
    CochesNuevosComponent,
    CochesSegundaComponent,
    CochesKm0Component,
    CochesAlquilerComponent,
    MotosComponent,
    VehiculosIndustrialesComponent,
    PaginaMuestraComponent,
    FiltrosComponent,
    MostrarCochesComponent,
    FooterComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    CocheLibraryRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSidenavModule, 
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    TopNavigationComponent,
    HomeComponent,
    MatSidenavModule, FooterComponent
  ]
})
export class CocheLibraryModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon('berlina', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/berlina.svg'));
    iconRegistry.addSvgIcon('coupe', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/coupe.svg'));
    iconRegistry.addSvgIcon('familiar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/familiar.svg'));
    iconRegistry.addSvgIcon('suv', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/suv.svg'));
    iconRegistry.addSvgIcon('pick-up', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pick-up.svg'));
    iconRegistry.addSvgIcon('supercar', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/supercar.svg'));
  }
 }


