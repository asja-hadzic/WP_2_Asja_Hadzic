import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CalendarComponent } from '../calendar/calendar.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-tournament',
  standalone: true,
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
})
export class TournamentComponent implements OnInit {
  allVideos = signal<{ [key: string]: string[] }>({
    '2025-01-06': ['https://www.youtube.com/embed/dC6sOnBuu2I?si=6dVXdZngGp4vjog_'],
    '2025-01-07': ['https://www.youtube.com/embed/H_4E9w3cjK4?si=R6qAdZK9R4qchi-4'],
    '2025-01-08': [
      'https://www.youtube.com/embed/PNwHv76Jpw4?si=uIFQZc6tNU2NVI4t',
      'https://www.youtube.com/embed/FY5_IwwuCiE?si=Z3PjUbDI_c3MpGvl',
    ],
  });
  filteredVideos: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.filteredVideos = this.getSafeUrls(this.getAllVideos());
  }

  onDateChange(event: string): void {
    // Access the value of the signal before indexing it
    const videos = this.allVideos()[event] || [];
    this.filteredVideos = this.getSafeUrls(videos);
  }

  private getSafeUrls(videoUrls: string[]): SafeResourceUrl[] {
    return videoUrls.map((url) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(url)
    );
  }

  private getAllVideos(): string[] {
    return ([] as string[]).concat(...Object.values(this.allVideos()) as string[][]);
  }
}

