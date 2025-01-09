import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kartica',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './kartica.component.html',
  styleUrls: ['./kartica.component.css']
})
export class KarticaComponent implements OnInit {
  products: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost/pokemon/php.index.php')
      .subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );
  }

  viewProduct(productId: number): void {
    this.router.navigate(['/product-details', productId]);
  }
}

