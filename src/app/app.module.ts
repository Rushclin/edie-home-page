import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HeaderComponent } from './header/header.component';
import { TeamsComponent } from './teams/teams.component';
import { FooterComponent } from './footer/footer.component';
import { Hero1Component } from './hero1/hero1.component';
import { Hero2Component } from './hero2/hero2.component';
import { Hero3Component } from './hero3/hero3.component';
import { FormationComponent } from './formation/formation.component';
import { CardComponent } from './card/card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    TestComponentComponent,
    HeaderComponent,
    TeamsComponent,
    FooterComponent,
    Hero1Component,
    Hero2Component,
    Hero3Component,
    FormationComponent,
    CardComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
