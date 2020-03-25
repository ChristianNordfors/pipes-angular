import { Component } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);
registerLocaleData(localFr);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string= 'Christian Nordfors';
  nombre2: string= 'chrIsTIan BerNaRDo NORdfOrs';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = false;
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/3PvNAOJZ04c';

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() =>{
      resolve('llegó la data de la promesa');
    }, 4500);
  });

  persona = {
    nombre: 'Christian',
    apellido: 'Nordfors',
    edad: 31,
    direccion: {
      calle: 'C.F.',
      numero: 123
    }
  }
}
