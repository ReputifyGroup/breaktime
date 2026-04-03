import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  currentImageIndex = 0;
  menuImages = [
    '/assets/gallery/galeria-3.jpg',
    '/assets/gallery/galeria-1.jpg'
  ];

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.menuImages.length;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.menuImages.length) % this.menuImages.length;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }
}
