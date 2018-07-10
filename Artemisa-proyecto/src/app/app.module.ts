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
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatDialogModule } from "@angular/material/dialog";

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
    AppRoutingModule,
    InfiniteScrollModule, 
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

