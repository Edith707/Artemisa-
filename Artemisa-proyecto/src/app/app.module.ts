import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from "@angular/material";
import { RoboComponent } from './robo/robo.component';
import { AcosoComponent } from './acoso/acoso.component';
import { ViolacionComponent } from './violacion/violacion.component';
import { DescargasComponent } from './descargas/descargas.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    RoboComponent,
    AcosoComponent,
    ViolacionComponent,
    DescargasComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule {}

