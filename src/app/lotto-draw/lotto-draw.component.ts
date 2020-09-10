import { Component, OnInit } from '@angular/core'
import {ILotteryRequest, Lotteries_Company, Lotteries_Product, IGetOpenLotteriesDrawsResponse} from '../interfaces/lotteries'
import { LotteryService } from '../services/lottery.service';
const lotteryEndpoint = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws';

@Component({
  selector: 'app-lotto-draw',
  templateUrl: './lotto-draw.component.html',
  styleUrls: ['./lotto-draw.component.less']
})
export class LottoDrawComponent implements OnInit {
  totalList: IGetOpenLotteriesDrawsResponse;
  payload: ILotteryRequest;

  constructor(private LotteryService:LotteryService) { }

  ngOnInit() {
    this.payload = 
      {
        CompanyId : Lotteries_Company.COMPANY_2,
        MaxDrawCountPerProduct: 5,
        OtionalProductFilter: [Lotteries_Product.PRODUCT_1, Lotteries_Product.PRODUCT_2, 
          Lotteries_Product.PRODUCT_3, Lotteries_Product.PRODUCT_4, Lotteries_Product.PRODUCT_5]
      };
    try{
      this.LotteryService.getLotteryResult(this.payload).subscribe((response: any) => {
          this.totalList = response.json();

        }, error => {
        console.log(error)
      })
    } catch(error) {
      console.log(error)
    };
  };
};