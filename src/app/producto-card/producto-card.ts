import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/product.model';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-producto-card',
  styleUrl: './producto-card.css',
  templateUrl: './producto-card.html',
})
export class ProductoCard {
  @Input() producto!: Producto;
  @Output() agregar = new EventEmitter<Producto>();

  alAgregar (): void {
    this.agregar.emit(this.producto);
  }
}
