import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  imports: [CommonModule],
  templateUrl: './esercizio1.html',
  styleUrl: './esercizio1.css'
})
export class Esercizio1 {
  x = 1;

  aumenta() {
    this.x += 1;
  }
}
