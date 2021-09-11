import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  modelsActive = true;
  provinces = new FormControl();
  provinceList : string [] = ['Albacete','Alicante','Almería','Araba','Asturias','Ávila','Badajoz','Balears','Barcelona','Bizkaia',
  'Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','Coruña ','Cuenca','Gipuzkoa','Girona',
  'Granada','Guadalajara','Huelva','Huesca','Jaén','León','Lleida','Lugo','Madrid','Málaga','Murcia','Navarra','Ourense',
  'Palencia','Las Palmas','Pontevedra','Rioja','Salamanca','Santa Cruz de Tenerife','Segovia','Sevilla','Soria',
  'Tarragona','Teruel','Toledo','Valencia','Valladolid','Zamora','Zaragoza','Ceuta','Melilla'
  ];
  disableSelect = new FormControl(false);

  marcas = [
    { title: 'Seleccione', value: 0 },
    { title: 'ALFA ROMEO', value: 1 },
    { title: 'AUDI', value: 2 },
    { title: 'BMW', value: 3 },
    { title: 'CUPRA', value: 4 },
    { title: 'DODGE', value: 5 },
    { title: 'FIAT', value: 6 },
    { title: 'HONDA', value: 7 },
    { title: 'HYUNDAI', value: 8 },
    { title: 'JAGUAR', value: 9 },
    { title: 'LAND-ROVER', value: 10 },
    { title: 'MAZDA', value: 11 },
    { title: 'MERCEDES-BENZ', value: 12 },
    { title: 'NISSAN', value: 13 },
    { title: 'PEUGEOT', value: 14 },
    { title: 'PORSCHE', value: 15 },
    { title: 'RENAULT', value: 16 },
    { title: 'SEAT', value: 17 },
    { title: 'TOYOTA', value: 18 },
    { title: 'VOLKSWAGEN', value: 19 },
    { title: 'VOLVO', value: 20 },
  ];

  modelos = [
    { value: 'Guilia' },
    { value: 'A5' },
    { value: 'X3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  prueba($event: any) {
    if($event.value !== 0) {
      this.modelsActive = false;
    } else {
      this.modelsActive = true;
    }
    console.log($event.value);
  }

}
