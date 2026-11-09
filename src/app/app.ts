import { Component } from '@angular/core';
import { Curso } from './models/curso.model';
import { CursoCard } from './curso-card/curso-card';

@Component({
  imports: [CursoCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Angular desde cero', horas: 25, precio: 180 },
    { id: 2, nombre: 'TypeScript práctico', horas: 18, precio: 140 },
    { id: 3, nombre: 'Diseño web', horas: 30, precio: 220 },
  ];
  cursosInscritos: Curso[] = [];

  get totalAPagar(): number {
    return this.cursosInscritos.reduce((total, curso) => total + curso.precio, 0);
  }

  estaInscrito(cursoId: number): boolean {
    return this.cursosInscritos.some((curso) => curso.id === cursoId);
  }

  inscribir(curso: Curso): void {
    if (this.estaInscrito(curso.id)) {
      return;
    }

    this.cursosInscritos.push(curso);
  }
}
