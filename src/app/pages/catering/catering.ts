import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catering',
  imports: [CommonModule],
  templateUrl: './catering.html',
  styleUrl: './catering.scss'
})
export class Catering {
  cateringImages = [
    {
      src: '/assets/catering/catering-1.jpg'
    },
    {
      src: '/assets/catering/catering-2.jpg'
    },
    {
      src: '/assets/catering/catering-3.jpg'
    },
    {
      src: '/assets/catering/catering-4.jpg'
    },
    {
      src: '/assets/catering/catering-5.jpg'
    },
    {
      src: '/assets/catering/catering-6.jpg'
    },
    {
      src: '/assets/catering/catering-7.jpg'
    },
    {
      src: '/assets/catering/catering-8.jpg'
    },
    {
      src: '/assets/catering/catering-9.jpg'
    }
  ];
}
