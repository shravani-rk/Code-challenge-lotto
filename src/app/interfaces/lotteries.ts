export interface IGetOpenLotteriesDrawsResponse {
    Draws: IOpenLotteriesDraw[];
}
export interface IOpenLotteriesDraw {	
    DrawNumber: number;	
    DrawDisplayName: String;		
    DrawDate: Date;				
    Div1Amount:	number;	
    IsDiv1Estimated?: boolean;
    IsDiv1Unknown?:	boolean;
}
export interface ILotteryRequest {
    CompanyId: Lotteries_Company;		
    MaxDrawCountPerProduct:	number;		
    OtionalProductFilter: Lotteries_Product[];
}
export enum Lotteries_Company{
    COMPANY_0 =  'None',
    COMPANY_1 =  'Tattersalls',
    COMPANY_2 =  'GoldenCasket',
    COMPANY_3 =  'NSWLotteries',
    COMPANY_4 =  'NTLotteries',
    COMPANY_5 =  'SALotteries'
}
export enum Lotteries_Product{
    PRODUCT_0 =  'None',
    PRODUCT_1 =  'TattsLotto',
    PRODUCT_2 =  'OzLotto',
    PRODUCT_3 =  'Powerball',
    PRODUCT_4 =  'Super66',
    PRODUCT_5 =  'Pools',
    PRODUCT_6 =  'MonWedLotto',
    PRODUCT_7 =  'LuckyLotteries2',
    PRODUCT_8 =  'LuckyLotteries5',
    PRODUCT_9 =  'LottoStrike',
    PRODUCT_10 =  'WedLotto',
    PRODUCT_11=  'Keno',
    PRODUCT_12=  'CoinToss',
    PRODUCT_13=  'SetForLife',
    PRODUCT_14=  'MultiProduct',
    PRODUCT_15=  'InstantScratchIts',
    PRODUCT_16=  'TwoDollarCasket',
    PRODUCT_17=  'BonusDraws'
}