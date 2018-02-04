import { Injectable } from '@angular/core';
import { Product } from './product';
//import { PRODUCTS } from './mock-products';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  private productsUrl = 'http://api.aktrace-s.jp:8888/inspects';
  //curl -X GET -H "Authorization: Token ioaktapiver00002" -H 'Content-Type:application/json' http://api.aktrace-s.jp:8888/inspects | jq .

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    let myheaders = new HttpHeaders();
    myheaders = myheaders.append('Authorization', 'Token ioaktapiver00002'); 
    myheaders = myheaders.append('Content-Type', 'application/json');
    let httpOptions = { headers: myheaders };
    //return this.http.get<Product[]>(this.productsUrl, httpOptions);
      return Observable.interval(5000)
        .flatMap(() => this.http.get<Product[]>(this.productsUrl, httpOptions));
  }
}
