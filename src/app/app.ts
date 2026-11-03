import { Component, signal } from '@angular/core';
import { Producto } from './models/product.model';
import { ProductoCard } from './producto-card/producto-card';

@Component({
  imports: [ProductoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Padre_Hijo');

  productos: Producto[] = [
    { id: 1, nombre: 'Cuaderno 1', precio: 12 },
    { id: 2, nombre: 'Lapicero 2', precio: 3 },
    { id: 3, nombre: 'Mochila 3', precio: 150 },
  ];
  cantidad = 0;
  total = 0;

  agregarAlCarrito(p: Producto): void {
    this.cantidad++;
    this.total += p.precio;
  }
}
