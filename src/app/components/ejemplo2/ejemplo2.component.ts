import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ejemplo1Component, Persona } from '../ejemplo1/ejemplo1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejemplo2',
  standalone: true,
  imports: [Ejemplo1Component, RouterLink],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.scss'
})
export class Ejemplo2Component implements OnInit, OnDestroy {
  saludo = 'Ejemplo 2 works';
  Imagenes = [
    "https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-770x431.jpg",
    "https://cvfaunia.com/wp-content/uploads/2020/11/123004876_3609155692482412_2049794398247296546_n-1024x577.jpg",
    "https://cvfaunia.com/wp-content/uploads/2020/11/123004876_3609155692482412_2049794398247296546_n-1024x577.jpg",
    "https://peru21-pe.b-cdn.net/sites/default/efsfiles/styles/wide/public/2024-06/d5q2f3ipn5bbfgk62axevl6nla.jpg?itok=Efoa-7tc"
  ]
  imagenActual = this.Imagenes[0];
  constructor(){}
  ngOnInit(): void {
    console.log('Ejemplo2Component initialized');
  }
  ngOnDestroy(): void {
    console.log('Componente destruido')
  }
  enviarImagen(indice: number) {
    this.imagenActual = this.Imagenes[indice];
  }
  onEmit (mensaje: string) {
    this.saludo = mensaje;
  }
}