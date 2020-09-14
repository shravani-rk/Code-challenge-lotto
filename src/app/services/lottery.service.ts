import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ILotteryRequest} from '../interfaces/lotteries'
import { Observable } from 'rxjs';


@Injectable()
export class LotteryService {
  lotteryEndpoint = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws';

  constructor(private http: HttpClient ) { }

  getLotteryResult(lotteryRequest: ILotteryRequest): Observable<any> {
      return this.http.post(this.lotteryEndpoint, JSON.stringify(lotteryRequest));
  }
}
