import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KarticaComponent } from './kartica/kartica.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TournamentComponent } from './tournament/tournament.component';
import { Meetings } from './calendar/meetings.interface';
import { signal } from '@angular/core';

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
    CalendarComponent,
    TournamentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-jedan';
  meetings = signal<Meetings>({
    '2025-02-20': ['https://www.youtube.com/watch?v=abc123'],
    '2024-04-06': ['https://www.youtube.com/watch?v=xyz456'],
  });
}
