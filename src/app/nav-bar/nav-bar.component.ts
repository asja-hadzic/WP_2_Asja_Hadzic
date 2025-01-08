import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  lastScrollTop: number = 0;
  navbarClass: string = '';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop) {
      this.navbarClass = 'retracted';
    } else {
      this.navbarClass = '';
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
