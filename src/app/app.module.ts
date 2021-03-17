import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocksComponent } from './blocks/blocks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StaticBoxesComponent } from './static-boxes/static-boxes.component';
import { TransactionDetailsComponent } from './blocks/transaction-details/transaction-details.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UnconfirmedComponent } from './unconfirmed/unconfirmed.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { VotingComponent } from './voting/voting.component';
import { DistributionComponent } from './distribution/distribution.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    BlocksComponent,
    NavbarComponent,
    StaticBoxesComponent,
    TransactionDetailsComponent,
    FooterComponent,
    TransactionComponent,
    UnconfirmedComponent,
    CurrenciesComponent,
    VotingComponent,
    DistributionComponent,
    StatisticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
