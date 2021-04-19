import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticker } from './binance.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BinanceService {

  constructor(private http: HttpClient) { }

  getTicker(symbol:string): Observable<Ticker> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    return this.http.get<Ticker>(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}EUR` , { headers: headers });
  }

}
