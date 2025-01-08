import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KarticaComponent } from './kartica/kartica.component';
import { CalendarComponent } from './calendar/calendar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    KarticaComponent,
    CalendarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-jedan';
   meetings = {
      '2025-02-20': ['Accessories Drop'],
      '2024-04-06': ['New Card: PSA Authentic Pikachu-HOLO'],
    };
}
