import { Injectable } from '@angular/core';
import { Urun } from '../models/urun.model';
import { Observable, empty, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UrunlerService {
  baseApiUrl: string = 'https://localhost:7014';

  constructor(private http: HttpClient) {}

  getAllUrunler(): Observable<Urun[]> {
    return this.http.get<Urun[]>(this.baseApiUrl + '/api/urunler');
  }

  addProduct(newProduct: Urun): Observable<Urun>{
    newProduct.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Urun>(this.baseApiUrl + "/api/urunler", newProduct);
  }

  getUrun(id:string):Observable<Urun>{
    return this.http.get<Urun>(this.baseApiUrl + "/api/urunler/" + id)
  }

  updateProduct(id:string, updateProduct:Urun):Observable<Urun>{
    return this.http.put<Urun>(this.baseApiUrl + "/api/urunler/" + id, updateProduct);
  }

  deleteProduct(id:string):Observable<Urun>{
    return this.http.delete<Urun>(this.baseApiUrl + "/api/urunler/" + id);
  }
}
