import { Component, OnInit } from '@angular/core';

interface Animal {
  id: number;
  nombre: string;
  edad: number;
}


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  animales: Animal[] = [];
  nuevoAnimal: Animal = { id: 0, nombre: '', edad: 0 };
  mostrarModal = false;


  ngOnInit(): void {
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.nuevoAnimal = { id: 0, nombre: '', edad: 0 }; 
  }

}
