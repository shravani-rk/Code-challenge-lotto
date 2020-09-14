import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LottoDrawComponent } from './lotto-draw/lotto-draw.component';
import { LotteryService } from './services/lottery.service';

@NgModule({
  declarations: [
    AppComponent,
    LottoDrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [LotteryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
