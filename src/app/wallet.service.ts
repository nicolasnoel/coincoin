import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coin } from './coins/coins.model';
import { MYCOINS } from './my-coins';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor() { }

  getCoins(): Observable<Coin[]> {
    return of(MYCOINS);
  }

}
