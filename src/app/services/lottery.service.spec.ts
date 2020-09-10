import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {LotteryService } from './lottery.service';

    describe('LotteryService', () => {
        let service: LotteryService;
        let httpMock: HttpTestingController;

        beforeEach(() => TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: [LotteryService]
        }));

        beforeEach(() => {
            service = TestBed.get(LotteryService);
        });

        it('should be created', () => {
            expect(service).toBeTruthy();
        });

        it('should retrieve lottery details', () => {
            let postParams: any;
             postParams = {
                'CompanyId': 'GoldenCasket',
                'MaxDrawCount': 20,
                'OptionalProductFilter': ["TattsLotto","MonWedLotto","OzLotto","MonWedLotto","Powerball","Super66"]
            };
           
            const result: any = {
                'Draws': {
                   'Div1Amount' : 4800000,
                   'DrawCloseDateTimeUTC': "2020-09-09T11:05:00",
                   'DrawCountDownTimerSeconds': 4685,
                   'DrawDate': "2020-09-09T00:00:00",
                   'DrawDisplayName': "Set for Life $4,800,000",
                   'DrawEndSellDateTimeUTC': "2020-09-09T11:00:00",
                   'DrawLogoUrl': "http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png",
                   'DrawNumber': 1861,
                   'DrawType': "BaseWeek",
                   'IsDiv1Estimated': false,
                   'IsDiv1Unknown': false,
                   'ProductId': "SetForLife744"
                 }
            };

            service.getLotteryResult(postParams).subscribe(drawList => {
                expect(drawList).toEqual(result.Draws);
            });

            const req = httpMock.expectOne(service.lotteryEndpoint);

            expect(req.request.method).toBe('POST');

            req.flush(result);
        });
    });