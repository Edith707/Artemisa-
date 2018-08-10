import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';
import { RoboComponent } from './robo/robo.component';
import { AcosoComponent } from './acoso/acoso.component';
import { ViolacionComponent } from './violacion/violacion.component';
import { DescargasComponent } from './descargas/descargas.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RoboComponent,
    AcosoComponent,
    ViolacionComponent,
    DescargasComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    NgbModule.forRoot(),

    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


