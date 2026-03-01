import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  isHeaderVisible = true;
  private lastScrollY = 0;
  private scrollListener: (() => void) | null = null;

  ngOnInit() {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private onScroll() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - this.lastScrollY;

    // Hide header when scrolling down (delta > 0), show when scrolling up (delta < 0)
    if (scrollDelta > 10) {
      this.isHeaderVisible = false;
    } else if (scrollDelta < -10) {
      this.isHeaderVisible = true;
    }

    this.lastScrollY = currentScrollY;
  }
}
