import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get<any[]>('http://127.0.0.1:8000/api/produtos').subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
