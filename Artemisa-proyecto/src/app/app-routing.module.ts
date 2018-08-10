import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { RoboComponent } from "./robo/robo.component";
import { AcosoComponent } from "./acoso/acoso.component";
import { ViolacionComponent } from "./violacion/violacion.component";
import { DescargasComponent } from "./descargas/descargas.component";
import { FooterComponent} from "./footer/footer.component";

const routes:Routes =[
  { path: "about", component: AboutComponent},
  { path:"robo", component: RoboComponent },
  { path:"acoso", component: AcosoComponent },
  { path: "violacion", component: ViolacionComponent },
  { path: "descargas", component: DescargasComponent },
  { path: "footer", component: FooterComponent}
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
