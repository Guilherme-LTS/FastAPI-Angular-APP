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

  getColor(product:any) {

    const quantidadeSugerida = 20;

    const diferenca = product.estoque - quantidadeSugerida;

    if (product.estoque < quantidadeSugerida) {
      return "red";
      // statusElement.innerText = "Vermelho";
      // statusElement.style.color = "red";
    } else if  (diferenca <= 5) {
        return "yellow";
      // statusElement.innerText = "Amarelo";
      // statusElement.style.color = "yellow";
    } else {
        return "green";
      // statusElement.innerText = "Verde";
      // statusElement.style.color = "green";
    }
    
  }
}




