import { Component, OnInit } from '@angular/core';
import { BinanceService } from '../binance.service';
import { MYCOINS } from '../my-coins';
import { WalletService } from '../wallet.service';
import { Coin } from './coins.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];
  total: number = 0;

  constructor(
    private walletService: WalletService,
    private binanceService: BinanceService
  ) { }

  ngOnInit(): void {
    this.walletService.getCoins()
      .subscribe(coins => {
        coins.forEach(
          coin => {
            this.binanceService.getTicker(coin.symbol).subscribe(
              ticker => {
                coin.price = ticker.price;
                coin.value = coin.price * coin.qty;
                this.total = this.total + coin.value;
              }
            )}
        );
        this.coins = coins;
      });  
  }  
  
}
