import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { TransactionDetailsComponent } from './blocks/transaction-details/transaction-details.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { DistributionComponent } from './distribution/distribution.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StaticBoxesComponent } from './static-boxes/static-boxes.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UnconfirmedComponent } from './unconfirmed/unconfirmed.component';
import { VotingComponent } from './voting/voting.component';


const routes: Routes = [
  {path: '' ,component :BlocksComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'staticbox', component:StaticBoxesComponent},
  {path: 'tran-detail', component : TransactionDetailsComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'unconfirmed' , component:UnconfirmedComponent},
  {path:'transaction', component:TransactionComponent},
  {path: 'currencies', component:CurrenciesComponent},
  {path: 'voting', component: VotingComponent},
  {path: 'distribution', component:DistributionComponent},
  {path:'statistics', component: StatisticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents=[BlocksComponent, NavbarComponent, StaticBoxesComponent,TransactionDetailsComponent,FooterComponent]
