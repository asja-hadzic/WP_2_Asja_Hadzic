import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarComponent } from '../calendar/calendar.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, CalendarComponent, SafeUrlPipe, HttpClientModule],
})
export class HomeComponent implements OnInit {
  allVideos = signal<{ [key: string]: string[] }>({
    '2025-01-06': ['https://www.youtube.com/embed/dC6sOnBuu2I?si=9tMmvsMcSYPunBJu'],
    '2025-01-07': ['https://www.youtube.com/embed/H_4E9w3cjK4?si=R6qAdZK9R4qchi-4'],
    '2025-01-08': [
      'https://www.youtube.com/embed/PNwHv76Jpw4?si=uIFQZc6tNU2NVI4t',
      'https://www.youtube.com/embed/FY5_IwwuCiE?si=Z3PjUbDI_c3MpGvl',
    ],
  });

  filteredVideos: string[] = Object.values(this.allVideos()).flat();

  onDateChange(event: string): void {
    const videos = this.allVideos()[event] || [];
    this.filteredVideos = event ? videos : Object.values(this.allVideos()).flat();
  }

  legendaryItems: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLegendaryItems();
  }

  fetchLegendaryItems(): void {
    this.http.get<any[]>('http://localhost/pokemon/highlight.php')
      .subscribe(
        (data: any[]) => {
          this.legendaryItems = data;
        },
        (error: any) => {
          console.error('Error fetching Legendary items', error);
        }
      );
  }
}
