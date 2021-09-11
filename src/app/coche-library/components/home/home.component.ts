import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Coches Nuevos', cols: 1, rows: 1, link: 'coches-nuevos' },
          { title: 'Coches KM0', cols: 1, rows: 1 , link: 'coches-km0'},
          { title: 'Coches de Segunda Mano', cols: 1, rows: 1, link: 'coches-segunda' },
          { title: 'Coches de Alquiler', cols: 1, rows: 1, link: 'coches-alquiler' },
          { title: 'Motos', cols: 1, rows: 1, link: 'motos' },
          { title: 'Vehículos Industriales', cols: 1, rows: 1, link: 'vehiculos-industriales' }
        ];
      }

      return [
        { title: 'Coches Nuevos', cols: 1, rows: 1, link: 'coches-nuevos' },
        { title: 'Coches KM0', cols: 1, rows: 1 , link: 'coches-km0'},
        { title: 'Coches de Segunda Mano', cols: 1, rows: 1, link: 'coches-segunda' },
        { title: 'Coches de Alquiler', cols: 1, rows: 1, link: 'coches-alquiler' },
        { title: 'Motos', cols: 1, rows: 1, link: 'motos' },
        { title: 'Vehículos Industriales', cols: 1, rows: 1, link: 'vehiculos-industriales' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
