import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
