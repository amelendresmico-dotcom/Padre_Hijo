import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  styleUrl: './curso-card.css',
  templateUrl: './curso-card.html',
})
export class CursoCard {
  @Input() curso!: Curso;
  @Input() inscrito = false;
  @Output() inscribirse = new EventEmitter<Curso>();

  alInscribirse(): void {
    if (!this.inscrito) {
      this.inscribirse.emit(this.curso);
    }
  }
}