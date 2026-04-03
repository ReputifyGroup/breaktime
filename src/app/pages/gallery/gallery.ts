import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  // Fotky z BREAKTIME Banská Bystrica
  galleryImages = [
    {
      src: '/assets/gallery/galeria-1.jpg',
    },
    {
      src: '/assets/gallery/galeria-2.jpg',
    },
    {
      src: '/assets/gallery/galeria-3.jpg',
    },
    {
      src: '/assets/gallery/galeria-4.jpg',
    },
    {
      src: '/assets/gallery/galeria-5.jpg',
    },
    {
      src: '/assets/gallery/galeria-6.jpg',
    },
    {
      src: '/assets/gallery/galeria-7.jpg',
    },
    {
      src: '/assets/gallery/galeria-8.jpg',
    },
    {
      src: '/assets/gallery/galeria-9.jpg',
    }
  ];

  selectedImage: any = null;

  openModal(image: any) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  nextImage() {
    const currentIndex = this.galleryImages.findIndex(img => img === this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.galleryImages.length;
    this.selectedImage = this.galleryImages[nextIndex];
  }

  prevImage() {
    const currentIndex = this.galleryImages.findIndex(img => img === this.selectedImage);
    const prevIndex = currentIndex === 0 ? this.galleryImages.length - 1 : currentIndex - 1;
    this.selectedImage = this.galleryImages[prevIndex];
  }
}
