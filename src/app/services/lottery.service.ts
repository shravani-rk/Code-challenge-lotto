import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ILotteryRequest} from '../interfaces/lotteries'


@Injectable()
export class LotteryService {
  lotteryEndpoint = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws';

  constructor(private http: Http) { }

  getLotteryResult(lotteryRequest: ILotteryRequest ) {
      return this.http.post(this.lotteryEndpoint, JSON.stringify(lotteryRequest));
  }
}
