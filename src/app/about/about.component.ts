import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-about',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './about.component.html',
   styleUrls: ['./about.component.css']
})
export class AboutComponent {
  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted!');
  }
    faq1Open = false;
    faq2Open = false;
    faq3Open = false;
    faq4Open = false;


    toggleFaq1() {
      this.faq1Open = !this.faq1Open;
    }

    toggleFaq2() {
      this.faq2Open = !this.faq2Open;
    }

    toggleFaq3() {
      this.faq3Open = !this.faq3Open;
    }

    toggleFaq4() {
        this.faq4Open = !this.faq4Open;
      }
}

