import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module'
import { FormsModule } from '@angular/forms';

export interface Persona {
  nombre: string
  imagen: string
}

@Component({
  selector: 'app-ejemplo1',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.scss'
})
export class Ejemplo1Component implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }
  
  @Input () imagenDelPadre: string = '';
  @Output () emisor = new EventEmitter <string> ();
  imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  nombre = '';
  nombres: Persona[] = [
   {nombre: 'Andres', imagen: 'https://img.freepik.com/free-photo/side-view-smiley-couple-indoors_23-2149903726.jpg?t=st=1725501072~exp=1725504672~hmac=605d3c38f8f42f5c6fdde66bd8c8ba5ea717f9f48cb841fa9aa115878e02e56c&w=740'},
   {nombre: 'Carlos', imagen: 'https://img.freepik.com/free-photo/beautiful-lesbian-couple-celebrating-their-wedding-day-outdoors_23-2150637608.jpg?t=st=1725501108~exp=1725504708~hmac=5eb898249b97cadff131002df4ec966f1d2f7d96c8beef5a8e2d939593bdd7ac&w=740'},
   {nombre: 'Juanan', imagen: 'https://img.freepik.com/premium-photo/medium-shot-family-retro-style_52683-115524.jpg?w=740'}
  ]
  setName () {
    this.nombre = 'Daniver';
  }
  alerta (nombre:string) {
    if (nombre === 'Daniver') {
      window.alert('Soy tu padre');
    }
  }
}
